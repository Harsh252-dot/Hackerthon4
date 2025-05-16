const Payout = require("../models/Payout");
const Session = require("../models/Session");
const breakdownLogic = require("../utils/breakdownLogic");

exports.generatePayout = async (req, res) => {
  try {
    const { mentorId, startDate, endDate, taxPercent = 18, deductions = 0 } = req.body;
    const sessions = await Session.find({
      mentor: mentorId,
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });

    const totalAmount = sessions.reduce((sum, s) => sum + s.duration * (s.ratePerHour / 60), 0);
    const taxes = (totalAmount * taxPercent) / 100;
    const finalAmount = totalAmount - deductions - taxes;

    const payout = await Payout.create({
      mentor: mentorId,
      sessions: sessions.map(s => s._id),
      totalAmount,
      taxes,
      deductions,
      finalAmount
    });

    res.status(201).json(payout);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMentorPayouts = async (req, res) => {
  try {
    const payouts = await Payout.find({ mentor: req.user.id }).populate("sessions");
    res.json(payouts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};