require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const payoutRoutes = require("./routes/payoutRoutes");
const receiptRoutes = require("./routes/receiptRoutes");
const chatRoutes = require("./routes/chatRoutes");
const auditRoutes = require("./routes/auditRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/payouts", payoutRoutes);
app.use("/api/receipts", receiptRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/audit", auditRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Payout Automation Platform API");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server Error", details: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
