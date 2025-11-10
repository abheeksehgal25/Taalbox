import mongoose, { Schema, Document } from "mongoose";

export interface IVendor extends Document {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  address?: string;
  isVerified: boolean;
  createdAt: Date;
}

const VendorSchema: Schema = new Schema<IVendor>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: false },
  city: { type: String, required: false },
  address: { type: String, required: false },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: () => new Date() },
});

export default mongoose.model<IVendor>("Vendor", VendorSchema);
