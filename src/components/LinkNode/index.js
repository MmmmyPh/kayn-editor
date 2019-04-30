import React, { useState } from 'react';
import { Popover } from 'antd';
import PopContent from './PopContent';
import './stylus.styl';

const prefixCls = 'c-link';

const LinkNode = ( { options, attributes, children, node, editor } ) => {
	const [ editing, setEditing ] = useState( false );

	const handleToggleEditing = ( ed ) => setEditing( ed );

	const handleOnVisibleChange = ( v ) => {
		if ( !v ) {
			handleToggleEditing( false );
		}
	};

	const href = options.getHref( node );

	return <Popover
		className = { prefixCls }
		trigger = 'click'
		placement = 'bottom'
		overlayStyle = { { zIndex: 10002 } }
		onVisibleChange = { handleOnVisibleChange }
		content = { <PopContent
			href = { href }
			editor = { editor }
			editing = { editing }
			toggleEditing = { handleToggleEditing }
		/> }
	>
		<a { ...attributes } href = { href } target = '_blank' data-kayn-slate-type = 'link' className = { `${ prefixCls }__anchor--fake` }>
			{children}
		</a>
	</Popover>;
};

export default LinkNode;