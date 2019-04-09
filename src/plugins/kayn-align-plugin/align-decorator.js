import React from 'react';
import { haveEqualedDataKeyValueInSomeBlock } from 'utils/have';
import blockAddData from 'plugins/helpers/blockAddData';
import blockClearData from 'plugins/helpers/blockClearData';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';

export const applyAlignChange = ( editor, align, type ) => {
	const isActive = haveEqualedDataKeyValueInSomeBlock( editor, type, align );

	if( isActive ) {
		return editor.command( blockClearData, type );
	}
	return editor.command( blockAddData, { data: { [ type ]: align } } );
};

export const alignDecorator = ( type ) => ( Button ) => {
	return class AlignDecorator extends React.Component {
		render() {
			const { editor, onChange, ...rest } = this.props;
			const typeName = type || this.props.type;
			const keyType = typeName.split( '_' )[ 0 ];
			const align = typeName.split( '_' )[ 1 ];
			let isActive = false;

			if ( editor ) {
				isActive = haveEqualedDataKeyValueInSomeBlock( editor, keyType, align );
			}

			const onClick = event => {
				event.preventDefault();
				if ( isActive ) {
					return editor.command( blockClearData, keyType );
				}
				return editor.command( blockAddData, { data: { [ keyType ]: align } } );
			};

			return (
				<Button
					type = { typeName }
					data-title = { TITLE[ typeName.toUpperCase() ] }
					onClick = { onClick }
					isActive = { isActive }
					{ ...rest }
				>
					<Icon icon = { typeName.toUpperCase() } />
				</Button>
			);
		}
	};
};