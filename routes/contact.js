var express = require('express');
var router = express.Router();

/* GET to contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', activeLink: 'contact'});
});

module.exports = router;
