import { getEventTransfer,getEventRange } from 'slate-react';
import isUrl from 'is-url';
import isImage from 'is-image';

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