const Chat = require("../models/Chat");

exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    let chat = await Chat.findOne({ mentor: req.user.id });

    if (!chat) {
      chat = await Chat.create({ mentor: req.user.id, messages: [] });
    }

    chat.messages.push({ sender: req.user.role, message });
    await chat.save();
    res.json(chat);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getChat = async (req, res) => {
  try {
    const chat = await Chat.findOne({ mentor: req.user.id });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
