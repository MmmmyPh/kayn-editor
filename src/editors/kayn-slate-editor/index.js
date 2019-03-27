import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Set, Map } from 'immutable';
import { Value } from 'slate';
import KaynWrapper from './kayn-wrapper';
import KaynToolbar from './kayn-toolbar';
import KaynContent from './kayn-content';
import { KaynValueContext } from './kayn-context';
import initialEditorState from './initial-editor-state';
// import plugins
import KaynBoldPlugin from 'plugins/kayn-bold-plugin';
import KaynItalicPlugin from 'plugins/kayn-italic-plugin';
import stylus from './stylus';

const parseImmutable = value => Value.fromJSON( value );

const defaultPluginsOptions = Set( [ 'bold', 'italic' ] );
const pluginsMap = Map( {
	bold: KaynBoldPlugin(),
	italic: KaynItalicPlugin(),
} );

const KaynEditor = ( { 
	prefixCls = 'kayn', 
	readOnly = false,
	wrapperClassName = '',
	excludePlugins = [],
	mode = 'normal',
	// value = '',
	// onChange = () => {}
} ) => {
	const [ value, setValue ] = useState( () => parseImmutable( /* value || */ initialEditorState ) );
	const [ isReadOnly, setIsReadOnly ] = useState( readOnly );
	const [ runningPlugins, setRunningPlugins ] = useState( defaultPluginsOptions );
	const [ plugins, setPlugins ] = useState( [] );
	const editorRef = useRef( null );

	useEffect( () => {
		setRunningPlugins( prevRP => prevRP.filterNot( opt => Set( excludePlugins ).has( opt ) ) );
		setPlugins( () => runningPlugins.map( use => pluginsMap.get( use ) ).toArray() );
	}, excludePlugins );

	return <KaynWrapper prefixCls = { prefixCls } className = { wrapperClassName }>
		<KaynValueContext.Provider value = { { value, setValue } }>
			<KaynToolbar 
				prefixCls = { prefixCls } 
				runningPlugins = { runningPlugins }
				editor = { editorRef.current }
			>
			</KaynToolbar>
			<KaynContent 
				prefixCls = { prefixCls }
				plugins = { plugins }
				ref = { editorRef }
			/>
		</KaynValueContext.Provider>
	</KaynWrapper>;
};

KaynEditor.propTypes = {
	prefixCls: PropTypes.string,
	wrapperClassName: PropTypes.string,
	value: PropTypes.object,
	onChange: PropTypes.func,
	readOnly: PropTypes.bool,
	excludePlugins: PropTypes.array,
	mode: PropTypes.oneOf( [ 'normal', 'md' ] )
};

export default KaynEditor;