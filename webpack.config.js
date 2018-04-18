/*
 * webpack :: Ming
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// __dirname nodejs 全局变量 指当前执行脚本所在目录
module.exports = {
	entry: __dirname + "/src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.styl$/,
				loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
			}
		]
	},
	resolve: {
    	extensions: ['', '.js', '.json', 'css', '.styl', '.png', '.jpg', '.svg', 'jsonp']
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),	//热模块替换插件
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],

	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
  		port: 8080,
  		open: true
	}

}