var rhAPI = require("robinhood");

/**
 * Make robinhood helper with credentials cfg
 */
function make(cfg) {
  var wrapper,
      credentials = {
        username: cfg.username,
        password: cfg.password
      };

  return new Promise(function(resolve, reject) {
    rhAPI(credentials, function() {
      resolve(rhAPI(null));
    });
  });

}

exports.make = make;
