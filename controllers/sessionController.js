const Session = require("../models/Session");

exports.addSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const { start, end } = req.query;
    const filter = req.user.role === 'mentor' ? { mentor: req.user.id } : {};

    if (start && end) {
      filter.date = { $gte: new Date(start), $lte: new Date(end) };
    }
    const sessions = await Session.find(filter).populate("mentor");
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};