import React, { useState } from 'react';
import { Popover } from 'antd';
import Button from 'components/button';
import Icon from 'components/icon';
import { CodeBlockNode, CodeLineNode } from 'components/codeBlockNode';
import CodeTypeSelect from 'components/codeTypeSelect';
import { CODE, CODE_LINE } from 'constant/blocks';
import TITLE from 'constant/button-title';
import isInCodeBlock from 'plugins/helpers/isInCodeBlock';
import wrapCodeBlock from 'plugins/helpers/wrapCodeBlock';

const KaynCodeBlockPlugin = ( opt ) => {
	const options = {
		typeCode: CODE,
		typeCodeLine: CODE_LINE,
		getCodeType: node => node.data.get( 'codeType' ),
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if ( props.node.type === options.typeCode ) {
				return <CodeBlockNode { ...options } { ...props } />;
			} else if ( props.node.type === options.typeCodeLine ) {
				return <CodeLineNode { ...props } />;
			}else{
				return next();
			}
		}
	};
};

export const KaynCodeBlockButton = ( { editor, onChange, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ codeType, setCodeType ] = useState( [] );

	const handleVisibleChange = ( v ) => {
		if( !v ) {
			setVisible( v );
		}
	};

	const handleClick = () => {
		const isCodeBlock = isInCodeBlock( editor );
		if ( isCodeBlock ) {
			editor.unwrapBlock( CODE );
		}else{
			setVisible( v => !v );
			setCodeType( [] );
		}
	};

	const handleCodeTypeSelect = ( lang ) => {
		if( lang ) {
			wrapCodeBlock( editor, lang );
			// editor.setBlocks( { 
			// 	type: CODE,
			// 	data: { codeType: lang } 
			// } );
		}
		setCodeType( lang );
		setVisible( false );
	};

	return (
		<Popover
			visible = { visible }
			overlayStyle = { { zIndex: 10002 } }
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