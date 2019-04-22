import React, { useEffect } from 'react';
import CodeTypeSelect from 'components/codeTypeSelect';
import Prism from 'prismjs';
import './prism.css';

const prefixCls = 'kayn';

const CodeBlockNode = ( { type, getCodeType, node, children, editor, attributes } ) => {
	useEffect( () => {
		Prism.highlightAll();
	},[] );

	const codeType = getCodeType( node );

	const handleCodeTypeSelect = ( lang ) => {
		editor.setNodeByKey( node.key, {
			data: { codeType: lang }
		} );
	};
	
	return (
		<div className = { `${ prefixCls }__code-block` }>
			<pre className = { `${ prefixCls }__code-self` } { ...attributes }>
				<code className = { `language-${ codeType }` }>{children}</code>
			</pre>
			<div className = { `${ prefixCls }__code-select` } contentEditable = { false }>
				<CodeTypeSelect value = { codeType } onSelect = { handleCodeTypeSelect } size = 'small' />
			</div>
		</div>
	);
};

const CodeLineNode = ( { attributes, children } ) => (
	<div { ...attributes }>{children}</div>
);

export {
	CodeBlockNode,
	CodeLineNode
};