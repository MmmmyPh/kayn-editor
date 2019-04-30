import React, { useContext, forwardRef } from 'react';
import classnames from 'classnames';
import { Editor } from 'slate-react';
import { KaynValueContext } from './kayn-context';
import kaynSchema from './kayn-schema';

const KaynContent = forwardRef( ( { prefixCls, plugins, isReadOnly }, ref ) => {
	const { editorValue, handleChange } = useContext( KaynValueContext );
	return (
		<div
			className = { classnames( `${ prefixCls }__content` ) }
		>
			<Editor
				ref = { ref }
				schema = { kaynSchema }
				className = { classnames( `${ prefixCls }__core` ) }
				plugins = { plugins }
				readOnly = { isReadOnly }
				value = { editorValue }
				onChange = { ( { value } ) => handleChange( value ) }
			/>
		</div>
	);
} ); 

export default KaynContent;