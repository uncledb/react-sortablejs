const path = require('path');
const webpack = require('webpack');

module.exports = [{
	entry: './example/app.jsx',
	output: {
		filename: './example/bundle.js'
	},

	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'}
		]
	}
}];
