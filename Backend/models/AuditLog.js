const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  action: String,
  by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
  details: Object
});

module.exports = mongoose.model("AuditLog", auditLogSchema);
