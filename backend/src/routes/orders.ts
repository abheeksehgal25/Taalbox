import express, { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import { body, validationResult } from "express-validator";
import Order from "../models/Order";
import Costume from "../models/Costume";
import { getRazorpay, requireRazorpayKeys } from "../config/razorpay";

const router = express.Router();

// Create Razorpay order and local Order doc
router.post(
  "/create",
  [
    body("costumeId").isString().notEmpty(),
    body("type").isIn(["rent", "buy"]).withMessage("type must be rent or buy"),
    body("customerName").isString().notEmpty(),
    body("customerEmail").isEmail(),
    body("amount").optional().isNumeric(),
    body("rentDays").optional().isNumeric(),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      requireRazorpayKeys();
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      const { costumeId, type, customerName, customerEmail, customerPhone, rentDays, rentStartDate, rentEndDate } = req.body;

      const costume = await Costume.findById(costumeId).lean();
      if (!costume) return res.status(404).json({ error: "Costume not found" });

      // Compute amount if not provided by client
      let amount = Number(req.body.amount);
      if (!amount || isNaN(amount)) {
        if (type === "rent") {
          const days = Number(rentDays) || 1;
          const rentPerDay = Number(costume.rentPricePerDay || 0);
          const deposit = Number(costume.deposit || 0);
          amount = rentPerDay * days + deposit;
        } else {
          amount = Number(costume.buyPrice || 0);
        }
      }
      amount = Math.max(0, Math.round(amount));

      const razorOrder = await getRazorpay().orders.create({
        amount: amount * 100, // in paise
        currency: "INR",
        receipt: `ord_${Date.now()}`,
      });

      const order = await Order.create({
        costumeId: costume._id,
        vendorId: costume.vendorId,
        type,
        rentDays: type === "rent" ? (Number(rentDays) || 1) : undefined,
        rentStartDate: rentStartDate ? new Date(rentStartDate) : undefined,
        rentEndDate: rentEndDate ? new Date(rentEndDate) : undefined,
        customerName,
        customerEmail,
        customerPhone,
        amount,
        currency: "INR",
        razorpayOrderId: razorOrder.id,
        status: "created",
      });

      res.json({ orderId: order._id, razorpayOrderId: razorOrder.id, amount, currency: "INR", keyId: process.env.RAZORPAY_KEY_ID });
    } catch (err) {
      next(err);
    }
  }
);

// Verify payment from frontend
router.post("/verify", [
  body("orderId").isString().notEmpty(),
  body("razorpay_order_id").isString().notEmpty(),
  body("razorpay_payment_id").isString().notEmpty(),
  body("razorpay_signature").isString().notEmpty(),
], async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: "Order not found" });

    const secret = process.env.RAZORPAY_KEY_SECRET || "";
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const digest = hmac.digest("hex");

    const verified = digest === razorpay_signature;
    order.razorpayPaymentId = razorpay_payment_id;
    order.razorpaySignature = razorpay_signature;
    order.status = verified ? "paid" : "failed";
    await order.save();

    res.json({ success: verified });
  } catch (err) {
    next(err);
  }
});

// Optional: Webhook endpoint
router.post("/webhook", express.raw({ type: "application/json" }), async (req: Request, res: Response) => {
  const signature = (req.headers["x-razorpay-signature"] || "") as string;
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "";
  const expected = crypto.createHmac("sha256", secret).update((req as any).body).digest("hex");
  if (signature !== expected) return res.status(400).send("Invalid signature");
  // You can parse and update order status here if needed
  res.json({ received: true });
});

export default router;
