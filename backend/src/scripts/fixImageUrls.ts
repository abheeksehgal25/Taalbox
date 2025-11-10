import dotenv from "dotenv";
import mongoose from "mongoose";
import Costume from "../models/Costume"; // adjust path if necessary

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/taalbox";
const API_BASE = process.env.API_URL || "http://localhost:4000";

function normalize(url?: string): string | undefined {
  if (!url) return undefined;
  let u = url.trim();
  // remove any embedded whitespace/newlines
  u = u.replace(/\s+/g, "");
  if (u.startsWith("/uploads/")) return `${API_BASE}${u}`;
  if (u.startsWith("http://") || u.startsWith("https://")) return u; // already absolute
  // If it's a bare filename, prefix
  if (/^[0-9A-Za-z_-]+\.[A-Za-z]{2,5}$/.test(u)) return `${API_BASE}/uploads/${u}`;
  return u; // fallback
}

(async () => {
  console.log("Connecting to MongoDB to fix image URLs...");
  await mongoose.connect(MONGODB_URI as string);
  console.log("✓ Connected");

  const costumes = await Costume.find({}).lean();
  let updated = 0;
  for (const c of costumes) {
    const newImage = normalize(c.image);
    const newPhotos = Array.isArray(c.photos) ? c.photos.map((p: string) => normalize(p) || p) : c.photos;

    const needsUpdate = newImage !== c.image || JSON.stringify(newPhotos) !== JSON.stringify(c.photos);
    if (needsUpdate) {
      await Costume.updateOne({ _id: c._id }, { $set: { image: newImage, photos: newPhotos } });
      updated++;
    }
  }

  console.log(`✓ Processed ${costumes.length} costumes; updated ${updated}`);
  await mongoose.disconnect();
  console.log("✓ Done");
  process.exit(0);
})().catch(err => {
  console.error("Error fixing image URLs", err);
  process.exit(1);
});
