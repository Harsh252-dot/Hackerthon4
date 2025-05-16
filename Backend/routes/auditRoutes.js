const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const role = require("../middlewares/Role");
const { getAuditLogs } = require("../controllers/AuditController");

// Only admin can view audit logs
router.get("/", auth, role("admin"), getAuditLogs);

module.exports = router;
