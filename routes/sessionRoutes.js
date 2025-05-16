const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const role = require("../middlewares/Role");
const { addSession, getSessions } = require("../controllers/sessionController");

// Admin can add sessions
router.post("/", auth, role("admin"), addSession);

// Both mentor and admin can get sessions (filtered by role inside controller)
router.get("/", auth, getSessions);

module.exports = router;
