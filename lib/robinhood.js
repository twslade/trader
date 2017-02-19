var api = require('robinhood');

var credentials;

function init(cfg) {
  credentials = cfg;
}

function orders(callback) {
  api(credentials, function() {
    api(null).orders(callback);
  });
}

function quote_data(stock, callback) {
  api(credentials, function() {
    api(null).quote_data(stock, callback);
  });
}

module.exports = {
  init: init,
  orders: orders,
  quote_data: quote_data
}
