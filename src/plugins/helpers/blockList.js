import { haveBlocks } from 'utils/have';

export const isActiveList = ( editor, type ) => {
	if ( editor ) {
		const { value: { blocks, document } } = editor;
		if ( blocks.size > 0 ) {
			const parent = document.getParent( editor.value.blocks.first().key );
			const wrapper = parent && document.getParent( parent.key );
			return haveBlocks( editor, 'list-item-child' ) && wrapper && wrapper.type === type;
		}
		return false;
	}
	return false;
};

export const toggleList = ( type, editor ) => editor.toggleList( { type: type } );