import express from "express";
import { upload } from "../config/fileUpload.js";
import { createExpense } from "../controllers/expenseController.js";

const router = express.Router();

router.post("/", upload.single("receipt"), createExpense);
// router.get("/", expenses);

export default router;
