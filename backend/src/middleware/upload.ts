import multer from "multer";
import path from "path";
import fs from "fs";
import { cloudinary } from "../config/cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import type { Request } from "express";

// Create uploads directory relative to the backend root
const uploadDir = path.join(process.cwd(), "uploads");

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`✓ Created uploads directory at ${uploadDir}`);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (_req: Request, _file: any, cb: (error: any, destination: string) => void) => {
    cb(null, uploadDir);
  },
  filename: (_req: Request, file: any, cb: (error: any, filename: string) => void) => {
    // Use timestamp + original filename for unique names
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter to allow only images
const fileFilter = (_req: Request, file: any, cb: (error: any, acceptFile: boolean) => void) => {
  const allowedMimes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Cloudinary storage for production/hosted images
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    // Store images in a collection-specific folder
    return {
      folder: process.env.CLOUDINARY_FOLDER || "nritya-ready-sets",
      resource_type: "image",
      public_id: undefined, // let Cloudinary generate
      overwrite: false,
      allowed_formats: ["jpg", "jpeg", "png", "webp", "gif"],
      transformation: [],
    } as any;
  },
});

export const uploadCloud = multer({
  storage: cloudinaryStorage as any,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});
