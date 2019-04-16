import React, { useState, useRef } from 'react';
import { Resizable } from 'react-resizable';
import basicNode from 'components/basicNode';
import KaynTable from 'components/table';

export const tableNode = ( opt ) => ( props, editor ) => <KaynTable { ...props } editor = { editor } tableOptions = { opt } />;

export const tableRowNode = () => basicNode( 'tr', { className: 'kayn__tr' } );

export const TableCellNode = ( { options, children } ) => {
	const [ width, setWidth ] = useState( 50 );

	const handleResize = ( e, { size } ) => setWidth( size.width );

	return (
		<Resizable width = { width } height = { 0 } onResize = { handleResize }>
			<td className = 'kayn__td' data-kayn-slate-type = 'td' style = { { width: `${ width }px` } }>{children}</td>
		</Resizable>
	);
};