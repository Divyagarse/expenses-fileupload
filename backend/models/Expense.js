import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String },
  expenseType: { type: String, required: true },
  receiptFileUrl: { type: String, required: true }, // store cloud URL
  filename: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Expense", expenseSchema);
