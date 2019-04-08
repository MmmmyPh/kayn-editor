import { haveEqualedDataKeyValueInSomeBlock } from 'utils/have';
import blockAddData from 'plugins/helpers/blockAddData';
import blockClearData from 'plugins/helpers/blockClearData';

export const applyAlignChange = ( editor, align, type ) => {
	const isActive = haveEqualedDataKeyValueInSomeBlock( editor, type, align );

	if( isActive ) {
		return editor.command( blockClearData, type );
	}
	return editor.command( blockAddData, { data: { [ type ]: align } } );
};