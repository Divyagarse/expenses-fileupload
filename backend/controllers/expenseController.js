import Expense from "../models/Expense.js";

export const createExpense = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Receipt file is required" });
    }

    const { amount, description, expenseType } = req.body;

    const newExpense = new Expense({
      amount,
      description,
      expenseType,
      receiptFileUrl: req.file.path, // Cloudinary URL
      filename: req.file.originalname,
    });

    const savedExpense = await newExpense.save();

    
    res.status(201).json({
      message: "Expense uploaded successfully",
      expense: savedExpense,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};



export const expenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};
