var path = require('path');
var webpack = require('webpack');

module.exports = function(env) {
  if(!env) env = {};

  var plugins = [];
  if(env.min) plugins.push(new webpack.optimize.UglifyJsPlugin());

  return {
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '../dist/'),
      filename: 'sortablejs' + (env.min ? '.min' : '') + '.js',
      libraryTarget: 'umd',
      publicPath: '/dist/'
    },
    externals: [
      'react',
      'sortablejs'
    ],
    module: {
      rules: [
        { test: /\.jsx/, use: 'babel-loader', exclude: /(node_modules|bower_components)/ }
      ]
    },
    plugins: plugins
  }
};