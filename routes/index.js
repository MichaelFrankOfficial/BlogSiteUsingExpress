var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', author: 'Michael Frank', activeLink: 'index' });
});

module.exports = router;

