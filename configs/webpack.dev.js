const webpack = require( 'webpack' );
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = merge( commonConfig, {
	mode: 'development',
	
	entry: {
		main: path.join( __dirname, '../examples/index.js' )
	},

	output: {
		path: path.join( __dirname, '../hot' ),
		filename: '[name].[hash].bundle.js',
		chunkFilename: '[id].[hash].chunk.js'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin( {
			debug: true
		} ),
		new HtmlWebpackPlugin( {
			template: path.join( __dirname, '../examples/index.html' ),
			chunks: [ 'main' ]
		} ),
		new HtmlWebpackPlugin( {
			template: path.join( __dirname, '../examples/index.html' ),
			chunks: [ 'mobile1' ],
			filename: 'mobile1.html'
		} )
	],
	
	devtool: 'inline-source-map'
} );