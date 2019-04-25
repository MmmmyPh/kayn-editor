export default ( img ) => new Promise( ( resolve, reject ) => {
	const reader = new FileReader();
	reader.addEventListener( 'load', () => resolve( reader.result ) );
	reader.addEventListener( 'error', ( error ) => reject( error ) );
	reader.readAsDataURL( img );
} );