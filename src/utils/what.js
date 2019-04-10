import { List } from 'immutable';

export const whatMarkTypesAre = ( editor ) => {
	if( editor && editor.value && editor.value.marks ) {
		return editor.value.marks.map( mark => mark.type );
	}
	return List( [] );
};

export const whatBlockTypesAre = ( editor ) => {
	if ( editor && editor.value && editor.value.blocks ) {
		return editor.value.blocks.map( block => block.type );
	}
	return List( [] );
};

export const whatInlineTypesAre = ( editor ) => {
	if ( editor && editor.value && editor.value.inlines ) {
		return editor.value.inlines.map( inline => inline.type );
	}
	return List( [] );
};