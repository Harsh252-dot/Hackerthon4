const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { sendMessage, getChat } = require("../controllers/ChatController");

// Both mentor and admin can send and fetch chat messages
router.post("/", auth, sendMessage);
router.get("/", auth, getChat);

module.exports = router;
