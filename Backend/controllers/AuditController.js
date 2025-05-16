const AuditLog = require("../models/AuditLog");

exports.getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find().populate("by", "email role");
    res.json(logs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
