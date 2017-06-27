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
		// publicPath: '/dist/',
	},
	devtool:'source-map',
	resolve: {
	    modules: ['node_modules', path.join(__dirname, '../node_modules')],
	    extensions: ['.web.js', '.jsx', '.js', '.json','scss'],
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
		 		test: /\.scss$/,
		 		loader: ExtractTextPlugin.extract({
		 			use: ['css-loader','postcss-loader','sass-loader']
		 		}) 
		 	},
		 	{ 
		 		test: /\.css$/i, 
		 		loader: ExtractTextPlugin.extract({
		 			// fallback: 'css-loader',
		 			use: ['css-loader','postcss-loader']
		 		}) 
		 	},
		 	{ 
				test: /\.(jpg|png)$/, 
				loader: "url-loader?limit=8192&name=images/[name].[hash].[ext]" 
			},
		]
	},
	plugins:[
		new WebpackChunkHash(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname,"src/images"),
			to: path.resolve(__dirname,"dist/images"),
		}]),
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