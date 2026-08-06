import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    amount: Number,
    services: [String],
    razorpayPaymentId: String,
    razorpayOrderId: String,
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
