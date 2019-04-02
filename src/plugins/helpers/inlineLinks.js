import { haveInlines } from 'utils/have';

export const defaultOpt = {
	href: ''
};

export default ( editor, type, opt = defaultOpt ) => {
	const { href, text } = opt;
	const haveLinks = haveInlines( editor, type );
	if( haveLinks ) {
		editor.unwrapInline( type );
	}else if( editor.value.selection.isExpanded ) {
		editor
			.wrapInline( {
				type,
				data: { href }
			} )
			.moveToEnd();
	}else {
		editor
			.insertText( text )
			.moveFocusBackward( text.length )
			.wrapInline( {
				type,
				data: { href }
			} )
			.moveToEnd()
			.focus();
	}

	return editor;
};