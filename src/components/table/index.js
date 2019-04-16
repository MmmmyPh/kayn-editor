import React, { useRef } from 'react';
import { Tooltip } from 'antd';
import Icon, {
	TableInsertRow,
	TableInsertColumn,
	TableDeleteRow, 
	TableDeleteColumn,
} from 'components/icon';

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

	const handleRemoveTable = () => editor.removeTable();

	const wrapperCls = isForbidden ? null : `${ prefixCls }__twrapper`;

	return (
		<div className = { wrapperCls }>
			{
				!isForbidden && <span className = { `${ prefixCls }__ttoolbar` }>
					<Tooltip title = '插入行'><span className = { `${ prefixCls }__ttool` } onMouseDown = { e => e.preventDefault() } onClick = { handleInertRow }><TableInsertRow /></span></Tooltip >
					<Tooltip title = '插入列'><span className = { `${ prefixCls }__ttool` } onMouseDown = { e => e.preventDefault() } onClick = { handleInertColumn }><TableInsertColumn /></span></Tooltip >
					<Tooltip title = '删除行'><span className = { `${ prefixCls }__ttool` } onMouseDown = { e => e.preventDefault() } onClick = { handleDeleteRow }><TableDeleteRow /></span></Tooltip >
					<Tooltip title = '删除列'><span className = { `${ prefixCls }__ttool` } onMouseDown = { e => e.preventDefault() } onClick = { handleDeleteColumn }><TableDeleteColumn /></span></Tooltip >
					<Tooltip title = '切换表头'><span className = { `${ prefixCls }__ttool` } onMouseDown = { e => e.preventDefault() } onClick = { handleToggleTh }><Icon icon = 'TH' style = { { width: 18, height: 18 } } /></span></Tooltip >
					<Tooltip title = '删除表格'><span className = { `${ prefixCls }__ttool` } onMouseDown = { e => e.preventDefault() } onClick = { handleRemoveTable }><Icon icon = 'DELETE' style = { { width: 18, height: 18 } } /></span></Tooltip >
				</span>
			}
			<KaynTableSelf attributes = { attributes } node = { node }>{children}</KaynTableSelf>
		</div>
	);
};

export default KaynTable;