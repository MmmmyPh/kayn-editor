import React, { useContext, forwardRef } from 'react';
import classnames from 'classnames';
import { Editor } from 'slate-react';
import { KaynValueContext } from './kayn-context';

const KaynContent = forwardRef( ( { prefixCls, plugins }, ref ) => {
	const { value, setValue } = useContext( KaynValueContext );
	return (
		<div
			className = { classnames( `${ prefixCls }__content` ) }
		>
			<Editor
				ref = { ref }
				className = { classnames( `${ prefixCls }__core` ) }
				plugins = { plugins }
				value = { value }
				onChange = { ( { value } ) => setValue( value ) }
			/>
		</div>
	);
} ); 

export default KaynContent;