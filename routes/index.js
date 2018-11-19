var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.status(200).send("Welcome to login");
});

/* GET home page. */
router.get('/logout', function(req, res, next) {
  res.status(200).send("Welcome to logout");
});

module.exports = router;
