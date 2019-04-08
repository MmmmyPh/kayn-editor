export default ( editor, dataKey ) => {
	const { value } = editor;
	const { blocks } = value;
	if ( blocks ) {
		blocks.forEach( block => {
			const blockOriginalData = block.get( 'data' );
			const newData = blockOriginalData.delete( dataKey );
			const newBlock = block.set( 'data', newData );
			editor.setBlocks( newBlock );
		} );
	}
	return editor;
};