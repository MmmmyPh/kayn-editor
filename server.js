const webpack = require( 'webpack' );
const path = require( 'path' );
const WebpackDevServer = require( 'webpack-dev-server' );
const config = require( './configs/webpack.dev' );
const opn = require( 'opn' );

const ip = '0.0.0.0';
const port = 9005;

const webpackDevServerEntries = [ 'react-hot-loader/patch', 'webpack-dev-server/client?http://' + ip + ':' + port, 'webpack/hot/only-dev-server' ];

if ( typeof config.entry === 'string' ) {
	config.entry = [].concat( webpackDevServerEntries, config.entry );
} else if ( typeof config.entry === 'object' ) {
	for ( let k in config.entry ) {
		let main = config.entry[ k ];
		config.entry[ k ] = [].concat( webpackDevServerEntries, main );
	}
}

const server = new WebpackDevServer( webpack( config ), {
	contentBase: path.resolve( __dirname, './' ),
	hot: true,
	disableHostCheck: true,
	publicPath: config.output.publicPath,
	historyApiFallback: false,
} );

server.listen( port, 'localhost', ( err ) => {
	if ( err ) {
		console.log( err );
	} else {
		opn( 'http://127.0.0.1:' + port );
		console.log( 'Listening at http://127.0.0.1:' + port );
	}
} );