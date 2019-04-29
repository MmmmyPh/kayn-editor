import { IMAGE } from '../../constant/blocks';
import getImageDataUrl from '../../utils/getImageDataUrl';
import getImageWH from '../../utils/getImageWH';

export const insertImageByChooser = ( editor, file ) => {
	const split = editor.splitBlock();
	editor
		.moveToEndOfNode( split.value.previousBlock )
		.insertBlock( {
			type: IMAGE,
			data: {
				src: file.base64Url,
				size: file.size,
				width: file.width,
				height: file.height
			}
		} )
		.focus();
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
