import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  costumeId: mongoose.Types.ObjectId;
  vendorId?: mongoose.Types.ObjectId;
  type: "rent" | "buy";
  rentDays?: number;
  rentStartDate?: Date;
  rentEndDate?: Date;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  amount: number; // total amount charged (rent * days + deposit or buy price)
  currency: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  status: "created" | "pending" | "paid" | "failed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema<IOrder> = new Schema<IOrder>({
  costumeId: { type: Schema.Types.ObjectId, ref: "Costume", required: true },
  vendorId: { type: Schema.Types.ObjectId, ref: "Vendor" },
  type: { type: String, enum: ["rent", "buy"], required: true },
  rentDays: { type: Number },
  rentStartDate: { type: Date },
  rentEndDate: { type: Date },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
  status: { type: String, enum: ["created", "pending", "paid", "failed", "cancelled"], default: "created" },
}, { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } });

export default mongoose.model<IOrder>("Order", OrderSchema);
