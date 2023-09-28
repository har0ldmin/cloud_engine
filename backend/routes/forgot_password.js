const express = require("express");
const resetSender = require("../middleware/reset-middleware");
const router = express.Router();

router.post("/", resetSender.sendReset);

module.exports = router;
