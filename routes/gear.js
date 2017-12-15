var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('gear', { title: "Gear", activeLink: 'gear' });
});

module.exports = router;