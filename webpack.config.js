var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: path.resolve(__dirname,'src/app.js'),
	output:{
		filename: '[name].[chunkhash].bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel-loader?presets[]=es2015&presets[]=stage-3$presets[]=react",
				exclude:/node_modules/,
				query:{
					cacheDirectory: true,
					plugins: [
						["import", { libraryName: "antd-mobile", style: "css" }],
						["transform-runtime", {
					      "helpers": false,
					      "polyfill": false,
					      "regenerator": true,
					      "moduleName": "babel-runtime"
					    }]
					]
				}
			}
		]
	}
}