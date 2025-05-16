const Receipt = require("../models/Receipt");
const sendMail = require("../utils/sendMail");

exports.generateReceipt = async (req, res) => {
  try {
    const { payoutId, breakdown, message } = req.body;
    const receipt = await Receipt.create({
      mentor: req.user.id,
      payout: payoutId,
      breakdown,
      message,
      sentAt: new Date()
    });

    await sendMail(req.user.email, "Your Receipt", JSON.stringify(receipt));
    res.status(201).json(receipt);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getReceipts = async (req, res) => {
  try {
    const filter = req.user.role === "mentor" ? { mentor: req.user.id } : {};
    const receipts = await Receipt.find(filter).populate("payout");
    res.json(receipts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
