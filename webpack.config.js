var webpack = require('webpack');
var path = require('path');
var WebpackChunkHash = require("webpack-chunk-hash");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: path.resolve(__dirname,'src/app.js'),
	output:{
		filename: '[name].[chunkhash].bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	devtool:'source-map',
	resolve: {
	    modules: ['node_modules', path.join(__dirname, '../node_modules')],
	    extensions: ['.web.js', '.jsx', '.js', '.json'],
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude:/node_modules/,
				query: {
				    plugins: [
				            ["transform-runtime", { polyfill: false }],
				            ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
				    ],
				    presets: ['es2015', 'stage-3', 'react']
				}
			}
		]
	},
	plugins:[
		new WebpackChunkHash(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname,"src/index.html"),
		}]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,"src/index.html"),
			inject: 'body',
		}),
	]
}