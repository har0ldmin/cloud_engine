var express = require('express');
var router = express.Router();

/* GET aboutDashboard page. */
router.get('/', function(req, res, next) {
  res.render('myDashboard/pages/guestDashboard/guestInstance.html');
});

module.exports = router;
