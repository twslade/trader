var express = require('express');
var fs = require('fs');
var router = express.Router();

var credentials = JSON.parse(fs.readFileSync('config.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
