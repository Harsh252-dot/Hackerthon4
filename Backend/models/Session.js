const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sessionType: { type: String, enum: ["Live", "Evaluation", "Review"] },
  date: Date,
  duration: Number,
  ratePerHour: Number
});

module.exports = mongoose.model("Session", sessionSchema);
