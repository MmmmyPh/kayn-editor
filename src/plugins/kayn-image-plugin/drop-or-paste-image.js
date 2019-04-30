import { message } from 'antd';
import { getEventTransfer, getEventRange } from 'slate-react';
import isUrl from 'is-url';
import isImage from 'is-image';
import isOverSize, { AVAILABLE_SIZE } from './is-oversize';

const imageAccepts = [ 'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp' ];

const dropOrPasteImage = ( { extensions = imageAccepts, insertImage = ( editor, file ) => {} } = {} ) => {

	function matchExt( type ) {
		if( extensions.includes( type ) ) {
			return true;
		}
		return false;
	}

	function applyAsyncEditorChange( editor, file ) {
		return Promise.resolve( insertImage( editor, file ) );/* .then( ( res ) => editor.onChange(editor.value) */
	}

	function onInsert( event, editor, next ) {
		const transfer = getEventTransfer( event );
		const range = getEventRange( event, editor );

		switch ( transfer.type ) {
			case 'files':
				return onInsertFiles( event, editor, next, transfer, range );
			case 'text':
				return onInsertText( event, editor, next, transfer, range );
			default:
				return next();
		}
	}

	function onInsertFiles( event, editor, next, transfer, range ) {
		const { files } = transfer;

		for ( const file of files ) {
			const fileType = file.type;
			const [ , ext ] = fileType.split( '/' );
			if ( !matchExt( ext ) ) {
				continue;
			}

			if ( isOverSize( file ) ) {
				message.error( `上传图片大小不能超过${ AVAILABLE_SIZE }M！, 文件: "${ file.name }"过大!` );
				continue;
			}

			if( range ) {
				editor.select( range );
			}

			applyAsyncEditorChange( editor, file );
		}
	}

	function onInsertText( event, editor, next, transfer, range ) {
		const { text } = transfer;
		if ( !isUrl( text ) ) {
			return next();
		}
		if ( !isImage( text ) ) {
			return next();
		}

		console.log( '==========' );
		console.log( transfer );
		console.log( '==========' );

		if ( range ) {
			editor.select( range );
		}

		applyAsyncEditorChange( editor, text );
	}

	return {
		onDrop: onInsert,
		onPaste: onInsert
	};
};

export default dropOrPasteImage;