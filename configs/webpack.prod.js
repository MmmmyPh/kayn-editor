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
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: '_'
		},
		slate: {
			commonjs: 'slate',
			commonjs2: 'slate',
			amd: 'slate',
			root: '_'
		},
		slateReact: {
			commonjs: 'slate-react',
			commonjs2: 'slate-react',
			amd: 'slate-react',
			root: '_'
		},
	},
	
	plugins: [
		new CleanWebpackPlugin()
	]
} );