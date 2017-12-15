var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('tomorrow', { title: "Tomorrow", activeLink: 'tomorrow'  });
});

module.exports = router;