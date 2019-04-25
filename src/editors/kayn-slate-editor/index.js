import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { OrderedSet, Map } from 'immutable';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';
import KaynWrapper from './kayn-wrapper';
import KaynToolbar from './kayn-toolbar';
import KaynContent from './kayn-content';
import { KaynValueContext } from './kayn-context';
import initialEditorState from './initial-editor-state';
// import plugins
import KaynParagraphPlugin from 'plugins/kayn-paragraph-plugin';
import KaynBoldPlugin from 'plugins/kayn-bold-plugin';
import KaynItalicPlugin from 'plugins/kayn-italic-plugin';
import KaynStrikethoughPlugin from 'plugins/kayn-strikethough-plugin';
import KaynUnderlinePlugin from 'plugins/kayn-underline-plugin';
import KaynSupPlugin from 'plugins/kayn-sup-plugin';
import KaynSubPlugin from 'plugins/kayn-sub-plugin';
import KaynLinkPlugin from 'plugins/kayn-link-plugin';
import HeaderPlugin from 'plugins/kayn-header-plugin';
import KaynBlockquotePlugin from 'plugins/kayn-blockquote-plugin';
import KaynCodePlugin from 'plugins/kayn-code-plugin';
import KaynCodeBlockPlugin from 'plugins/kayn-codeblock-plugin';
import KaynListPlugin from 'plugins/kayn-list-plugin';
import KaynAlignPlugin from 'plugins/kayn-align-plugin';
import KaynFontColorPlugin from 'plugins/kayn-font-color-plugin';
import KaynFontBgColorPlugin from 'plugins/kayn-font-bg-color-plugin';
import KaynTablePlugin from 'plugins/kayn-table-plugin';
import KaynImagePlugin from 'plugins/kayn-image-plugin';
// import stylus
import './stylus';

const parseImmutable = value => Value.fromJSON( value );

const defaultPluginsOptions = OrderedSet( [ 
	'color', 'fontBgColor', 'divider-0',
	'bold', 'italic', 'underline', 'strikethough', 'divider-1', 
	'header', 'blockquote', 'list', 'divider-2',
	'align', 'indent', 'divider-3',
	'sup', 'sub', 'code', /* 'codeBlock', */ 'divider-4',
	'link', 'table', 'image', 'paragraph'
] );
const pluginsMap = Map( {
	paragraph: KaynParagraphPlugin(),
	bold: KaynBoldPlugin(),
	italic: KaynItalicPlugin(),
	underline: KaynUnderlinePlugin(),
	strikethough: KaynStrikethoughPlugin(),
	sup: KaynSupPlugin(),
	sub: KaynSubPlugin(),
	code: KaynCodePlugin(),
	codeBlock: KaynCodeBlockPlugin(),
	link: KaynLinkPlugin(),
	header: HeaderPlugin(),
	blockquote: KaynBlockquotePlugin(),
	list: KaynListPlugin(),
	align: KaynAlignPlugin(),
	color: KaynFontColorPlugin(),
	fontBgColor: KaynFontBgColorPlugin(),
	table: KaynTablePlugin(),
	image: KaynImagePlugin()
} );

const KaynEditor = ( { 
	prefixCls = 'kayn', 
	readOnly = false,
	wrapperClassName = '',
	excludePlugins = [],
	mode = 'normal',
	value = '',
	onChange = () => {}
} ) => {
	const [ editorValue, setValue ] = useState( () => parseImmutable( value || initialEditorState ) );
	const [ isReadOnly, setIsReadOnly ] = useState( readOnly );
	const [ isFullscreen, setFullscreen ] = useState( false );
	const [ runningPlugins, setRunningPlugins ] = useState( defaultPluginsOptions );
	const [ plugins, setPlugins ] = useState( [] );
	const editorRef = useRef( null );

	useEffect( () => {
		setRunningPlugins( prevRP => prevRP.filterNot( opt => OrderedSet( excludePlugins ).has( opt ) ) );
		setPlugins( () => runningPlugins.map( use => pluginsMap.get( use ) || {} ).toArray().flat() );
	}, excludePlugins );

	useEffect( () => {
		setIsReadOnly( readOnly );
	}, [ readOnly ] );

	const handleChange = ( value ) => {
		setValue( value );
		onChange( value );
	};

	const handleGoFull = () => setFullscreen( full => !full );

	const wrapperClsStr = classnames( wrapperClassName, { [ `${ prefixCls }--fullscreen` ] : isFullscreen } );

	return <KaynWrapper prefixCls = { prefixCls } className = { wrapperClsStr }>
		<KaynValueContext.Provider value = { { editorValue, handleChange } }>
			{
				!isReadOnly && <KaynToolbar
					prefixCls = { prefixCls }
					isFull = { isFullscreen }
					goFull = { handleGoFull }
					runningPlugins = { runningPlugins }
					editor = { editorRef.current }
				>
				</KaynToolbar>
			}
			<KaynContent 
				isReadOnly = { isReadOnly }
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

const plainDeserialize = Plain.deserialize;
const plainSerialize = Plain.serialize;

export {
	plainDeserialize,
	plainSerialize
};