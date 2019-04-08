import { Map } from 'immutable';

export default ( editor, { data } ) => {
	const { value } = editor;
	const blocks = value.blocks;
	if( blocks ) {
		blocks.forEach( ( block ) => {
			const mapData = Map( data );
			const originData = block.get( 'data' ) || Map( {} );
			const newData = originData.merge( mapData );
			const newType = block.set( 'data', newData );
			editor.setBlocks( newType );
		} );
	}
	return editor;
};