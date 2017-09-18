var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		inline: true,
		port: 3003
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', "stage-2"]
				}

			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
