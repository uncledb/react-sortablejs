var path = require('path');

console.log(123);

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?/, loader: 'babel-loader' }
    ]
  },
  externals: [
    function(ctx, req, cb) { /^global-/.test(req) ? cb(null, req.substr(7)) : cb() }
  ]
};