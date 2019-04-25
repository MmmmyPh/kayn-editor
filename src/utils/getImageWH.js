export default ( src ) => new Promise( ( resolve, reject ) => {
	let img = new Image();
	img.addEventListener( 'load', () => resolve( [ img.width, img.height ] ) );
	img.addEventListener( 'error', ( err ) => reject( err ) );
	img.src = src;
} );