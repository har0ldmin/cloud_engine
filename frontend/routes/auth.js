var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('auth/login.html', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('auth/signup.html', { title: 'Express' });
});

router.get('/forgot', function(req, res, next) {
  res.render('auth/forgot.html', { title: 'Express' });
});

module.exports = router;
