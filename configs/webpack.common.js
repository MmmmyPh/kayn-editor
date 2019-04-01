const webpack = require( 'webpack' );
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
// const poststylus = require( 'poststylus' );

module.exports = {

	module: {
		rules: [
			{
				test: /\.jsx?/,
				use:[
					'babel-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{ 
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'postcss-loader',
					{ 
						loader: 'less-loader',
						options: { 
							javascriptEnabled: true 
						}
					},
				]
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{ 
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'postcss-loader',
					'stylus-loader',
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					'url-loader'
				]
			},
			{
				test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
				use: [ 'file-loader' ]
			}
		]
	},

	// plugins: [
	// 	new webpack.LoaderOptionsPlugin( {
	// 		options: {
	// 			stylus: {
	// 				use: [ poststylus( [ 'autoprefixer' ] ) ]
	// 			}
	// 		}
	// 	} )
	// ],
	
	resolve: {
		alias: {
			utils: path.resolve( __dirname, '../src/utils' ),
			plugins: path.resolve( __dirname, '../src/plugins' ),
			components: path.resolve( __dirname, '../src/components' ),
			constant: path.resolve( __dirname, '../src/constant' ),
			stylus: path.resolve( __dirname, '../src/stylus' ),
		},
		extensions: [ '.webpack.js', '.web.js', '.js', '.ts', '.jsx', '.tsx', '.css', '.styl' ]
	},
};