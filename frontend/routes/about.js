var express = require('express');
var router = express.Router();

/* GET aboutUs page. */
router.get('/', function(req, res, next) {
  res.render('aboutUs2/aboutUs2.html');
});

module.exports = router;
