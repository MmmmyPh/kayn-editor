import React from 'react';
import TablePicker from 'create-table-picker';
import DeepTable from 'slate-deep-table';
import Button from 'components/button';
import Icon from 'components/icon';
import {
	// tableNode,
	tableRowNode,
	tableCellNode
} from 'components/tableNode';
import TITLE from 'constant/button-title';
import {
	TABLE,
	TABLE_ROW,
	TABLE_CELL,
} from 'constant/blocks';

const KaynTablePlugin = ( opt ) => {
	const options = {
		typeTable: TABLE,
		typeRow: TABLE_ROW,
		typeCell: TABLE_CELL,
		...opt
	};
	const deepTablePlugin = DeepTable( /* options */ );
	
	return {
		...deepTablePlugin,
		// renderNode: ( props, editor, next ) => {
		// 	if ( props.node.type === options.typeTable ) {
		// 		return tableNode( options )( props );
		// 	} else if ( props.node.type === options.typeRow ) {
		// 		return tableRowNode( options )( props );
		// 	} else if ( props.node.type === options.typeRow ) {
		// 		return tableCellNode( options )( props );
		// 	}else {
		// 		next();
		// 	}
		// }
	};
};

export const KaynTableButton = ( { editor, onChange, ...rest } ) => {
	const handleTablePickerChange = ( { roleNumber, columnNumber } ) => {
		editor.insertTable( columnNumber, roleNumber );
	};

	return (
		<TablePicker
			onChange = { handleTablePickerChange }
		>
			<Button
				type = { TABLE }
				data-title = { TITLE[ TABLE.toUpperCase() ] }
				{ ...rest }
			>
				<Icon icon = { TABLE.toUpperCase() } />
			</Button>
		</TablePicker>
	);
};

export default KaynTablePlugin;