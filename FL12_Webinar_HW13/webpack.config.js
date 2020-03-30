const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
            },
			{
				test: /\.(sass|scss)$/,
				use: [
				MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
				]
          }
        ]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	plugins: [
        new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/styles.css'
		})
    ],
	devServer: {
		port: 7700,
		open: true
	}
};