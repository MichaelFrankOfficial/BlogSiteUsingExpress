var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

/* GET to blog page. */
router.get('/', function(req, res, next) {
  res.render('blog', { 
    title: 'Blog',
     activeLink: 'blog',
     author: 'author',
     dataSource: repo.dataSource,
     postCount: repo.postCount(),
     posts: repo.getPosts()});
});


module.exports = router;
