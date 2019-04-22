export default ( str ) => {
	if( typeof str !== 'string' ) {
		throw new TypeError( 'Expected a string' );
	}

	const newlines = str.match( /(?:\r?\n)/g ) || [];

	if ( newlines.length === 0 ) {
		return;
	}

	const crlf = newlines.filter( newline => newline === '\r\n' ).length;
	const lf = newlines.length - crlf;

	return crlf > lf ? '\r\n' : '\n';
};
