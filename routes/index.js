var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var robinhood = req.app.locals.robinhood;
  robinhood.orders(function(err, result, body) {
    if (err) {
      console.error(err);
    }
    console.log(body);
  });
});

module.exports = router;
