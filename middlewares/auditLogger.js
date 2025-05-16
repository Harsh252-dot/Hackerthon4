const AuditLog = require("../models/AuditLog");

const auditLogger = (actionType, model, description) => {
  return async (req, res, next) => {
    try {
      await AuditLog.create({
        action: actionType,
        model,
        description,
        by: req.user._id,
        timestamp: new Date()
      });
    } catch (err) {
      console.error("Audit logging failed:", err.message);
    }
    next();
  };
};

module.exports = auditLogger;
