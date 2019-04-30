import { IMAGE } from '../../constant/blocks';
import getImageDataUrl from '../../utils/getImageDataUrl';
import getImageWH from '../../utils/getImageWH';

const MAX_WIDTH = 600;

export const insertImageByChooser = ( editor, file ) => {
	const { base64Url, size, width, height } = file;
	const trueWidth = width,
		trueHeight = height,
		ratio = trueWidth / trueHeight,
		inverseRatio = trueHeight / trueWidth;

	let useWidth = width,
		useHeight = height;

	if ( trueWidth > MAX_WIDTH ) {
		useWidth = MAX_WIDTH;
		useHeight = MAX_WIDTH * inverseRatio;
	}
	
	editor.insertBlock( {
		type: IMAGE,
		data: {
			src: base64Url,
			size: size,
			width: useWidth,
			height: useHeight,
			trueWidth,
			trueHeight,
		}
	} );
};

export const insertImageByDrop = ( editor, file ) => {
	let base64Url;
	getImageDataUrl( file )
		.then( imageUrl => {
			base64Url = imageUrl;
			return getImageWH( imageUrl );
		} )
		.then( ( [ width, height ] ) => {
			let fileDeco = {
				base64Url: base64Url,
				status: 'done',
				width: width,
				height: height,
			};
			insertImageByChooser( editor, fileDeco );
		} );
};
