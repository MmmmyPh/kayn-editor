import React from 'react';
import basicNode from 'components/basicNode';
import KaynTable from 'components/table';

export const tableNode = ( opt ) => ( props ) => <div>1</div>;
{/* <KaynTable { ...props } tableOptions = { opt } />; */}

export const tableRowNode = () => basicNode( 'tr', { className: 'kayn__tr' } );

export const tableCellNode = () => basicNode( 'td', { className: 'kayn__td', minWidth: 50 } );