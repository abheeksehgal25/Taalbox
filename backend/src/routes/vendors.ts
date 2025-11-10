import express, { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import Vendor from "../models/Vendor";
import Costume from "../models/Costume";
import { uploadCloud, upload } from "../middleware/upload";

const router = express.Router();

// Create vendor (vendors will be instantly available upon creation).
// Decide storage strategy (Cloudinary if credentials present, else disk)
const useCloud = !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET);
const uploader = useCloud ? uploadCloud : upload;

router.post(
  "/",
  uploader.array("samplePhotos", 5), // Accept up to 5 image files
  [
    body("name").isString().trim().notEmpty().withMessage("name is required"),
    body("email").isEmail().withMessage("valid email is required"),
    body("city").optional().isString().trim(),
    body("phone").optional().isString().trim(),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phone, city, address } = req.body;
  const files = (req as any).files || [];

  console.log(`[Vendor POST] Received ${files.length} files for vendor ${name} (cloud=${useCloud})`);
  files.forEach((f: any) => console.log(`  - ${(f.originalname || f.filename || f.path)} (${f.size} bytes)`));

      // Parse inventory from request body if it was stringified
      let inventory: any[] = [];
      if (req.body.inventory) {
        try {
          inventory = typeof req.body.inventory === "string" ? JSON.parse(req.body.inventory) : req.body.inventory;
        } catch (parseErr) {
          console.error("Failed to parse inventory:", parseErr);
          inventory = [];
        }
      }

      // Create vendor
      const vendor = new Vendor({ name, email, phone, city, address, isVerified: false });
      await vendor.save();
      console.log(`[Vendor POST] Created vendor: ${vendor._id}`);

      // If vendor supplied inventory, create costume documents linking to vendor
      let createdCostumes = [] as any[];
      if (Array.isArray(inventory) && inventory.length > 0) {
        const baseUrl = process.env.API_URL || "http://localhost:4000"; // used for disk fallback
        const docs = inventory.map((item: any, index: number) => {
          // If files are uploaded, use the appropriate file for this costume (or first if only one inventory)
          const fileIndex = files.length > 1 ? index : 0;
          const f = files[fileIndex] || files[0];
          const cloudUrl = f?.path || f?.secure_url || f?.url; // cloud provider URL
          const imageUrl = files.length > 0
            ? (useCloud ? (cloudUrl || "") : `${baseUrl}/uploads/${f?.filename}`)
            : item.image || "";
          
          return {
            ...item,
            vendorId: vendor._id,
            vendorName: vendor.name,
            location: city || item.location || "",
            image: imageUrl,
            photos: files.map((ff: any) => useCloud ? (ff?.path || ff?.secure_url || ff?.url) : `${baseUrl}/uploads/${ff.filename}`),
          };
        });
        createdCostumes = await Costume.insertMany(docs);
        console.log(`[Vendor POST] Created ${createdCostumes.length} costume(s)`);
      }

      // Return vendor and any created inventory
      res.status(201).json({ 
        vendor, 
        createdCostumes, 
        uploadedFiles: files.length,
        message: `Vendor created with ${files.length} photos and ${createdCostumes.length} costume(s)`
      });
    } catch (err) {
      console.error("[Vendor POST] Error:", err);
      next(err);
    }
  }
);

// List vendors (optionally filter by city)
router.get("/", async (req, res, next) => {
  try {
    const city = (req.query.city as string) || undefined;
    const q: any = {};
    if (city) q.city = city;
    const vendors = await Vendor.find(q).sort({ createdAt: -1 }).lean();
    res.json(vendors);
  } catch (err) {
    next(err);
  }
});

// Get vendor by id
router.get("/:id", async (req, res, next) => {
  try {
    const vendor = await Vendor.findById(req.params.id).lean();
    if (!vendor) return res.status(404).json({ error: "Vendor not found" });
    res.json(vendor);
  } catch (err) {
    next(err);
  }
});

export default router;
