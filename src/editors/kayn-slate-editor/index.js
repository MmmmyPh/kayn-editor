import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { OrderedSet, Map } from 'immutable';
import { Value } from 'slate';
import KaynWrapper from './kayn-wrapper';
import KaynToolbar from './kayn-toolbar';
import KaynContent from './kayn-content';
import { KaynValueContext } from './kayn-context';
import initialEditorState from './initial-editor-state';
// import plugins
import KaynBoldPlugin from 'plugins/kayn-bold-plugin';
import KaynItalicPlugin from 'plugins/kayn-italic-plugin';
import KaynStrikethoughPlugin from 'plugins/kayn-strikethough-plugin';
import KaynUnderlinePlugin from 'plugins/kayn-underline-plugin';
import KaynSupPlugin from 'plugins/kayn-sup-plugin';
import KaynSubPlugin from 'plugins/kayn-sub-plugin';
import KaynLinkPlugin from 'plugins/kayn-link-plugin';
// import stylus
import stylus from './stylus';

const parseImmutable = value => Value.fromJSON( value );

const defaultPluginsOptions = OrderedSet( [ 
	'bold', 'italic', 'underline', 'strikethough', 'divider-0', 
	'sup', 'sub', 'divider-1',
	'link'
] );
const pluginsMap = Map( {
	bold: KaynBoldPlugin(),
	italic: KaynItalicPlugin(),
	underline: KaynUnderlinePlugin(),
	strikethough: KaynStrikethoughPlugin(),
	sup: KaynSupPlugin(),
	sub: KaynSubPlugin(),
	link: KaynLinkPlugin(),
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
		setRunningPlugins( prevRP => prevRP.filterNot( opt => OrderedSet( excludePlugins ).has( opt ) ) );
		setPlugins( () => runningPlugins.map( use => pluginsMap.get( use ) || {} ).toArray() );
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