import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

let razorpayClient: Razorpay | null = null;

export function requireRazorpayKeys() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys missing. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env");
  }
}

export function getRazorpay(): Razorpay {
  requireRazorpayKeys();
  if (!razorpayClient) {
    razorpayClient = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });
  }
  return razorpayClient;
}
