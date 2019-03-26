import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Value } from 'slate';
import KaynWrapper from './kayn-wrapper';
import KaynToolbar from './kayn-toolbar';
import KaynContent from './kayn-content';
import initialEditorState from './initial-editor-state';
import stylus from './stylus';

const parseImmutable = value => Value.fromJSON( value );

const KaynEditor = ( { 
	prefixCls = 'kayn', 
	readOnly = false,
	wrapperClassName
} ) => {
	const [ value, setValue ] = useState( () => parseImmutable( initialEditorState ) );
	const [ isReadOnly, setIsReadOnly ] = useState( readOnly );

	return <KaynWrapper prefixCls = { prefixCls } className = { wrapperClassName }>
		<KaynToolbar prefixCls = { prefixCls }>toolbar</KaynToolbar>
		<KaynContent 
			prefixCls = { prefixCls }
			value = { value }
			onChange = { ( { value } ) => setValue( value ) }
		/>
	</KaynWrapper>;
};

KaynEditor.propTypes = {
	prefixCls: PropTypes.string,
	wrapperClassName: PropTypes.string,
	value: PropTypes.object,
	onChange: PropTypes.func,
	readOnly: PropTypes.bool
};

export default KaynEditor;