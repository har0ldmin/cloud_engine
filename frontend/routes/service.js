var express = require('express');
var router = express.Router();

/* GET selection page. */
router.get('/', function(req, res, next) {
  res.render('service/service.html');
});

module.exports = router;

