const getImageDataUrlViaUrl = ( url ) => new Promise( ( resolve, reject ) => {
	let img = new Image();

	img.onload = () => {
		resolve( img );
	};

	img.setAttribute( 'crossOrigin', 'anonymous' );
	img.src = url;
} ).then( ( img ) => {
	let canvas = document.createElement( 'canvas' );
	const ctx = canvas.getContext( '2d' );
	let dataUrl;
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage( img, 0, 0, img.width, img.height );
	dataUrl = canvas.toDataURL();
	return dataUrl;
} );

const getImageDataUrlViaFile = ( file ) => new Promise( ( resolve, reject ) => {
	const reader = new FileReader();
	reader.addEventListener( 'load', () => resolve( reader.result ) );
	reader.addEventListener( 'error', ( error ) => reject( error ) );
	reader.readAsDataURL( file );
} );

const getImageDataUrl = ( img ) => {
	if( typeof img === 'string' ) {
		return getImageDataUrlViaUrl( img );
	}else{
		return getImageDataUrlViaFile( img );
	}
};

export default getImageDataUrl;