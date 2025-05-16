const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  payout: { type: mongoose.Schema.Types.ObjectId, ref: "Payout" },
  breakdown: [Object],
  message: String,
  sentAt: Date
});

module.exports = mongoose.model("Receipt", receiptSchema);
