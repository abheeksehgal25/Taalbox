import mongoose, { Schema, Document } from "mongoose";

export interface ICostume extends Document {
  title: string;
  vendorId?: mongoose.Types.ObjectId;
  vendorName?: string;
  danceForm?: string;
  clusterTag?: string;
  colorFamily?: string[];
  fabric?: string;
  setCount?: number;
  sizesAvailable?: string[];
  rentPricePerDay?: number;
  buyPrice?: number;
  deposit?: number;
  lateFeePerDay?: number;
  groupDiscount?: number; // percentage
  taxIncluded?: boolean;
  leadTimeDays?: number;
  photos?: string[];
  location?: string;
  availabilityStatus?: string;
  rentalMinDays?: number;
  rentalMaxDays?: number;
  availableFrom?: Date;
  availableTo?: Date;
  unavailableDates?: Date[];
  bookingNotes?: string;
  backupAvailable?: boolean;
  description?: string;
  styleTag?: string;
  tags?: string[];
  condition?: string;
  image?: string;
  // Fit & alterations
  adjustable?: boolean;
  fitNotes?: string;
  alterationsIncluded?: boolean;
  alterationsNotes?: string;
  sizeMeasurements?: {
    blouseSize?: string;
    chestMin?: number;
    chestMax?: number;
    waistMin?: number;
    waistMax?: number;
    length?: number;
  };
  // Logistics & policies
  pickupAvailable?: boolean;
  deliveryAvailable?: boolean;
  deliveryAreas?: string[];
  deliveryFee?: number;
  shippingNotes?: string;
  cleaningIncluded?: boolean;
  ironingIncluded?: boolean;
  accessoriesIncluded?: string[];
  packageContents?: string[];
  damagePolicy?: string;
  replacementCost?: number;
  returnPolicy?: string;
}

const CostumeSchema: Schema = new Schema<ICostume>({
  title: { type: String, required: true },
  vendorId: { type: Schema.Types.ObjectId, ref: "Vendor" },
  vendorName: { type: String },
  danceForm: { type: String },
  clusterTag: { type: String },
  colorFamily: { type: [String] },
  fabric: { type: String },
  setCount: { type: Number },
  sizesAvailable: { type: [String] },
  rentPricePerDay: { type: Number },
  buyPrice: { type: Number },
  deposit: { type: Number },
  lateFeePerDay: { type: Number },
  groupDiscount: { type: Number },
  taxIncluded: { type: Boolean, default: false },
  leadTimeDays: { type: Number },
  photos: { type: [String] },
  location: { type: String },
  availabilityStatus: { type: String, enum: ["available", "reserved", "unavailable"], default: "available" },
  rentalMinDays: { type: Number, default: 1 },
  rentalMaxDays: { type: Number },
  availableFrom: { type: Date },
  availableTo: { type: Date },
  unavailableDates: { type: [Date] },
  bookingNotes: { type: String },
  backupAvailable: { type: Boolean, default: false },
  description: { type: String },
  styleTag: { type: String },
  tags: { type: [String] },
  condition: { type: String, enum: ["new", "like-new", "good", "fair"], required: false },
  image: { type: String }
  ,
  adjustable: { type: Boolean, default: false },
  fitNotes: { type: String },
  alterationsIncluded: { type: Boolean, default: false },
  alterationsNotes: { type: String },
  sizeMeasurements: {
    blouseSize: { type: String },
    chestMin: { type: Number },
    chestMax: { type: Number },
    waistMin: { type: Number },
    waistMax: { type: Number },
    length: { type: Number },
  },
  pickupAvailable: { type: Boolean, default: false },
  deliveryAvailable: { type: Boolean, default: false },
  deliveryAreas: { type: [String] },
  deliveryFee: { type: Number },
  shippingNotes: { type: String },
  cleaningIncluded: { type: Boolean, default: true },
  ironingIncluded: { type: Boolean, default: true },
  accessoriesIncluded: { type: [String] },
  packageContents: { type: [String] },
  damagePolicy: { type: String },
  replacementCost: { type: Number },
  returnPolicy: { type: String }
});

export default mongoose.model<ICostume>("Costume", CostumeSchema);
