import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    phoneNumber: { type: String },
    alternatePhone: { type: String },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: { type: String, select: false, required: true },

    address: { type: String },

    paymentMethod: {
      type: String,
      enum: ["CREDIT_CARD", "TRANSFER", "CASH"],
      default: "CREDIT_CARD"
    },
  },
  { timestamps: true }
);



export default mongoose.model("User", userSchema);
