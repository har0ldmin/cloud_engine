var express = require('express');
var router = express.Router();

/* GET myDashboard page. */
router.get('/', function(req, res, next) {
  res.render('myDashboard/pages/dashboard/dashboard.html');
});

module.exports = router;
