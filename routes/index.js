var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    var Robinhood = require('robinhood')(req.app.locals.credentials, function(){
      Robinhood.orders(function(err, response, body) {
          if (err) {
              console.error(err);
          } else {
              console.log(body);
          }
      });
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
