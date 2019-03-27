export const haveMarks = ( { value }, type ) => {
	if( value.marks.size > 0 ) {
		return value.marks.some( mark => mark.type === type );
	}

	return false;
};

export const haveBlocks = ( { value }, type ) => {
	if( value.blocks.size > 0 ) {
		return value.blocks.some( block => block.type === type );
	}

	return false;
};

export const haveInlines = ( { value }, type ) => {
	if ( value.inlines.size > 0 ) {
		return value.inlines.some( inline => inline.type === type );
	}

	return false;
};