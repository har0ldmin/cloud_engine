var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
  res.render('myDashboard/pages/wishlist/wishlist.html');
});

module.exports = router;
