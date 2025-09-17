import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes
import adminRoutes from "./routes/adminRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import approvalRoutes from "./routes/approvalRoutes.js";   // ✅ NEW
import balanceRoutes from "./routes/balanceRoutes.js";     // ✅ NEW
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (_req, res) => res.json({ ok: true }));

// Use routes
app.use("/api/admin", adminRoutes);
app.use("/api/member", memberRoutes);
app.use("/api/approvals", approvalRoutes);   // ✅ NEW
app.use("/api/balance", balanceRoutes);      // ✅ NEW
app.use("/api/user", userRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  });
