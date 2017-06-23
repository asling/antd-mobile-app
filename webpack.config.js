var webpack = require('webpack');
var path = require('path');
var WebpackChunkHash = require("webpack-chunk-hash");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
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
			},
			{ 
				test: /\.(jpg|png)$/, 
				loader: "url?limit=8192" 
			},
			{ 
				test: /\.(svg)$/i, 
				loader: 'svg-sprite-loader', 
				include: [
			        require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
			        path.resolve(__dirname, 'src/icons'),  // 自己私人的 svg 存放目录
			    ]
		 	},
		 	{ 
		 		test: /\.less$/i, 
		 		loader: ExtractTextPlugin.extract({
		 			fallback: 'css-loader',
		 			use: ['postcss-loader','less-loader']
		 		}) 
		 	},
		 	{ 
		 		test: /\.css$/i, 
		 		loader: ExtractTextPlugin.extract({
		 			fallback: 'css-loader',
		 			use: 'postcss-loader'
		 		}) 
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
		new ExtractTextPlugin({
			filename:'[name].css', 
			allChunks: true
		}),
	]
}