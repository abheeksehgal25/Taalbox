import mongoose from "mongoose";
import dotenv from "dotenv";
import Costume from "../models/Costume";

// Import the frontend costumes collection
// NOTE: this file assumes you're running the script with ts-node so importing TS files works
// Path adjusted to reach the repo root `src` directory from backend/src/scripts
// Use a JSON seed file placed alongside this script to avoid ESM/TS import issues
const frontendCostumes: any[] = require("./costumes.seed.json");

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "";

async function seed() {
  if (!MONGODB_URI) {
    console.error("MONGODB_URI not set in .env");
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB for seeding");

  try {
    // Optional: clear existing costumes (be careful in production)
    // await Costume.deleteMany({});

    const docs = frontendCostumes.map((c: any) => ({
      title: c.title,
      vendorName: c.vendor || "Unknown",
      danceForm: c.danceForm,
      clusterTag: c.clusterTag,
      colorFamily: c.colorFamily || c.colors || [],
      fabric: c.fabric,
      setCount: c.setCount || 1,
      sizesAvailable: c.sizesAvailable || c.sizes || ["M"],
      rentPricePerDay: c.rentPricePerDay || c.rentPrice || 0,
      buyPrice: c.buyPrice || 0,
      deposit: c.deposit || 0,
      leadTimeDays: c.leadTimeDays || 2,
      photos: c.photos || (c.image ? [c.image] : []),
      image: c.image || (c.photos && c.photos[0]) || "",
      location: c.location || "Gurgaon",
      availabilityStatus: c.availabilityStatus || "available",
      backupAvailable: c.backupAvailable || c.guaranteedBackup || false,
      description: c.description || "",
      styleTag: c.styleTag || c.styleEra || "",
    }));

    const inserted = await Costume.insertMany(docs, { ordered: false });
    console.log(`Inserted ${inserted.length} costumes`);
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
    process.exit(0);
  }
}

seed();
