var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
  res.render('myDashboard/pages/history/history.html');
});

module.exports = router;
