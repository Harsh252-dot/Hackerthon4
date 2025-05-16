const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { generateReceipt, getReceipts } = require("../controllers/ReceiptController");

// Mentor or Admin generate & view receipts
router.post("/", auth, generateReceipt);
router.get("/", auth, getReceipts);

module.exports = router;
