import React, { useRef } from 'react';
import {
	TableInsertRow,
	TableInsertColumn,
	TableDeleteRow, 
	TableDeleteColumn,
} from 'components/icon';
import ToolButton from 'components/toolButton';

const prefixCls = 'kayn';

const splitHeader = ( children, node ) => {
	const rows = children;
	const header = !( node.get( 'data' ).get( 'headless' ) );

	if ( !header || !rows || !rows.length || rows.length === 1 ) {
		return { header: null, rows: rows };
	}
	return {
		header: rows[ 0 ],
		rows: rows.slice( 1 ),
	};
};

const KaynTableSelf = ( { attributes, children, node } ) => {
	const { header, rows } = splitHeader( children, node );
	return (
		<table 
			className = { `${ prefixCls }__table` }
			data-kayn-slate-type = 'table'
		>
			{
				header && 
				<thead data-kayn-slate-type = 'thead' { ...attributes }>{header}</thead>
			}
			<tbody data-kayn-slate-type = 'tbody' { ...attributes }>{rows}</tbody>
		</table>
	);
};

const KaynTable = ( { tableOptions, editor, attributes, children, node, isSelected, readOnly } ) => {

	const isForbidden = !isSelected || readOnly;

	const handleInertRow = () => editor.insertRow();

	const handleInertColumn = () => editor.insertColumn();

	const handleDeleteRow = () => editor.removeRow();

	const handleDeleteColumn = () => editor.removeColumn();

	const handleToggleTh = () => editor.toggleTableHeaders();

	const handleRemoveTable = () => editor.removeNodeByKey( node.key );

	const wrapperCls = isForbidden ? null : `${ prefixCls }__twrapper`;

	return (
		<div className = { wrapperCls }>
			{
				!isForbidden && <span className = { `${ prefixCls }__ttoolbar` }>
					<ToolButton className = { `${ prefixCls }__ttool` } title = '插入行' icon = { <TableInsertRow /> } onClick = { handleInertRow } />
					<ToolButton className = { `${ prefixCls }__ttool` } title = '插入列' icon = { <TableInsertColumn /> } onClick = { handleInertColumn } />
					<ToolButton className = { `${ prefixCls }__ttool` } title = '删除行' icon = { <TableDeleteRow /> } onClick = { handleDeleteRow } />
					<ToolButton className = { `${ prefixCls }__ttool` } title = '删除列' icon = { <TableDeleteColumn /> } onClick = { handleDeleteColumn } />
					<ToolButton className = { `${ prefixCls }__ttool` } title = '切换表头' icon = 'TH' onClick = { handleToggleTh } />
					<ToolButton className = { `${ prefixCls }__ttool` } title = '删除表格' icon = 'DELETE' onClick = { handleRemoveTable } />
				</span>
			}
			<KaynTableSelf attributes = { attributes } node = { node }>{children}</KaynTableSelf>
		</div>
	);
};

export default KaynTable;