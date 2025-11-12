import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import vendorsRouter from "./routes/vendors";
import costumesRouter from "./routes/costumes";
import ordersRouter from "./routes/orders";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/taalbox";
const RAW_CORS = process.env.CORS_ORIGIN || "http://localhost:8081,http://localhost:8080,http://localhost:5173";
const CORS_ORIGIN = RAW_CORS.split(/[,\s]+/).filter(Boolean);

const app = express();

// Security middlewares
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(morgan("tiny"));
app.use(cors({ origin: CORS_ORIGIN, credentials: false }));
app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // raise limit to reduce 429 during development/testing
  })
);

// Serve uploaded files as static assets
const uploadsDir = path.join(process.cwd(), "uploads");
// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log(`✓ Created uploads directory at ${uploadsDir}`);
}
// Explicitly allow CORS on static files
app.use("/uploads", cors(), express.static(uploadsDir, {
  setHeaders: (res, path) => {
    res.set("Cache-Control", "public, max-age=604800");
    res.set("Access-Control-Allow-Origin", "*");
  },
}));

// Routes
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/vendors", vendorsRouter);
app.use("/api/costumes", costumesRouter);
app.use("/api/orders", ordersRouter);

// Global error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: any) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Connect to MongoDB and start
console.log("Attempting to connect to MongoDB...");
console.log(`URI: ${MONGODB_URI.substring(0, 50)}...`);

const mongooseOptions: any = {
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

mongoose
  .connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log("✓ Connected to MongoDB");
    const server = app.listen(PORT, () => {
      console.log(`✓ Server running on port ${PORT}`);
      console.log(`✓ App listening on http://localhost:${PORT}`);
    });
    
    server.on("error", (err: any) => {
      console.error("Server error:", err);
    });
  })
  .catch((err) => {
    console.error("✗ MongoDB connection error:", err.message);
    process.exit(1);
  });
