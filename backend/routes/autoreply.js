const express = require("express");
const { sendAutoReplyMiddleware } = require("../middleware/autoReply");
const router = express.Router();

router.post("/", sendAutoReplyMiddleware);

module.exports = router;
