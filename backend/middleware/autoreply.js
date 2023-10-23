const { AutoReply } = require("../models/autoReplyModel");
const mailer = require("./mailer");
const validator = require("validator");

const sendAutoReplyMiddleware = async (req, res, next) => {
  try {
    const { email } = req.body;

    const newAutoReply = new AutoReply({ email });

    await newAutoReply.save();

    next();
  } catch (error) {
    console.error('Error in sendAutoReplyMiddleware:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { sendAutoReplyMiddleware };
