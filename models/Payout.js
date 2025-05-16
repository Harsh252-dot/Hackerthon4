const mongoose = require("mongoose");

const payoutSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  totalAmount: Number,
  taxes: Number,
  deductions: Number,
  finalAmount: Number,
  status: { type: String, enum: ["Pending", "Paid", "Under Review"], default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payout", payoutSchema);
