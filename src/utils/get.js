export const getMarkByType = ( editor, type ) => {
	if( editor && editor.value && editor.value.marks.size > 0 ) {
		return editor.value.marks.filter( mark => mark.type === type );
	}
};

export const getBlockByType = ( editor, type ) => {
	if ( editor && editor.value && editor.value.blocks.size > 0 ) {
		return editor.value.blocks.filter( block => block.type === type );
	}
};