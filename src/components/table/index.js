import React, { useRef } from 'react';

const KaynTableSelf = ( { attributes, children } ) => (
	<table>
		<tbody { ...attributes }>{children}</tbody>
	</table>
);

const KaynTable = ( { tableOptions, attributes, children, isSelected, readOnly } ) => {
	
	if( !isSelected || readOnly ) {
		return <KaynTableSelf attributes = { attributes }>{children}</KaynTableSelf>;
	}

	return (
		<div>
			<KaynTableSelf attributes = { attributes }>{children}</KaynTableSelf>
		</div>
	);
};

export default KaynTable;