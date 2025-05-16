const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const role = require("../middlewares/Role");
const { generatePayout, getMentorPayouts } = require("../controllers/PayoutController");

// Admin generates payout for mentors
router.post("/", auth, role("admin"), generatePayout);

// Mentor views own payouts
router.get("/", auth, getMentorPayouts);

module.exports = router;
