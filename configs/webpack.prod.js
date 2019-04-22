const webpack = require( 'webpack' );
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

module.exports = merge( commonConfig, {
	mode: 'production',
	
	entry: path.resolve( __dirname, '../src/index.js' ),

	output: {
		path: path.join( __dirname, '../build' ),
		filename: 'kayn-editor.js',
		library: 'kaynEditor'
	},

	externals: {
		antd: {
			commonjs: 'antd',
			commonjs2: 'antd',
			amd: 'antd',
			root: '_'
		},
		immutable: {
			commonjs: 'immutable',
			commonjs2: 'immutable',
			amd: 'immutable',
			root: '_'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: '_'
		},
		reactDom: {
			commonjs: 'reactDom',
			commonjs2: 'reactDom',
			amd: 'reactDom',
			root: '_'
		}
	},
	
	plugins: [
		new CleanWebpackPlugin()
	]
} );