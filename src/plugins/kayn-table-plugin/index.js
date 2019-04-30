import React from 'react';
import TablePicker from 'create-table-picker';
import DeepTable from 'slate-deep-table';
import Button from 'components/button';
import Icon from 'components/icon';
import {
	tableNode,
	tableRowNode,
	TableCellNode
} from 'components/tableNode';
import TITLE from 'constant/button-title';
import {
	PARAGRAPH,
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
	const deepTablePlugin = DeepTable( options );
	
	return {
		...deepTablePlugin,
		renderNode: ( props, editor, next ) => {
			if ( props.node.type === options.typeTable ) {
				return tableNode( options )( props, editor );
			} else if ( props.node.type === options.typeRow ) {
				return tableRowNode( options )( props );
			} else if ( props.node.type === options.typeCell ) {
				return <TableCellNode options = { options } { ...props } />;
			} else {
				return next();
			}
		}
	};
};

export const KaynTableButton = ( { editor, onChange, ...rest } ) => {
	const handleTablePickerChange = ( { rowNumber, columnNumber } ) => {
		editor
			.insertTable( columnNumber + 1, rowNumber + 1 )
			.moveTableSelection( 0, 0 )
			.focus();
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