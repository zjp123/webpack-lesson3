const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	module: {
		rules: [{ 
			test: /\.js$/, 
			include: path.resolve(__dirname, '../src'),
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			} 
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}), 
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		})
	],
	optimization: {
		// runtimeChunk: {
		// 	name: 'runtime'
		// },
		usedExports: true,
		splitChunks: {
			chunks: 'all',
			minChunks: 1,
			// minSize: 0,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					// name: 'vendors',
				}
			}
		}
	},
	performance: false,
	output: {
		path: path.resolve(__dirname, '../dist')
	}
}