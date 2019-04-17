import React, { useState } from 'react';
import { Popover } from 'antd';
import Button from 'components/button';
import Icon from 'components/icon';
import { CODE } from 'constant/blocks';
import CodeBlockNode from 'components/codeBlockNode';
import TITLE from 'constant/button-title';
import CodeTypeSelect from './code-type-select';

const KaynCodeBlockPlugin = ( opt ) => {
	const options = {
		type: CODE,
		codeType: node => node.data.get( 'codeType' ),
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if( props.node.type === options.type ) {
				return <CodeBlockNode { ...options } { ...props } />;
			}else{
				return next();
			}
		}
	};
};

export const KaynCodeBlockButton = () => {
	const [ visible, setVisible ] = useState( false );
	const [ codeType, setCodeType ] = useState( [] );

	const handleVisibleChange = ( v ) => {
		if( !v ) {
			setVisible( v );
		}
	};

	const handleClick = () => {
		setVisible( v => !v );
	};

	const handleCodeTypeSelect = ( value ) => {
		console.log( '==========' );
		console.log( value );
		console.log( '==========' );
		setCodeType( value );
		setVisible( false );
	};

	return (
		<Popover
			visible = { visible }
			content = { <CodeTypeSelect value = { codeType } onSelect = { handleCodeTypeSelect } /> }
			title = '添加代码快'
			trigger = 'click'
			onVisibleChange = { handleVisibleChange }
		>
			<Button
				type = { CODE }
				data-title = { TITLE[ CODE.toUpperCase() ] }
				onClick = { handleClick }
				// isActive={haveLinks}
				// { ...rest }
			>
				<Icon icon = { CODE.toUpperCase() } />
			</Button>
		</Popover>
	);
};

export default KaynCodeBlockPlugin;