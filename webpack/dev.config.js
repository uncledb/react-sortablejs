var path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'widget.js',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  }
};