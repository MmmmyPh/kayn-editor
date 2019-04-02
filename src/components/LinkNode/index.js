import React, { useState } from 'react';
import { Popover } from 'antd';
import PopContent from './PopContent';

const aTextStyle = {
	cursor: 'text'
};

const LinkNode = ( { options, attributes, children, node, editor } ) => {
	const [ editing, setEditing ] = useState( false );
	console.log( '==========' );
	console.log( node );
	console.log( '==========' );

	const handleToggleEditing = ( ed ) => setEditing( ed );

	const handleOnVisibleChange = ( v ) => {
		if ( !v ) {
			handleToggleEditing( false );
		}
	};

	const href = options.getHref( node );

	return <Popover
		trigger = 'click'
		placement = 'bottom'
		onVisibleChange = { handleOnVisibleChange }
		content = { <PopContent
			href = { href }
			node = { node }
			editor = { editor }
			editing = { editing }
			toggleEditing = { handleToggleEditing }
		/> }
	>
		<a { ...attributes } href = { href } target = '_blank' data-kayn-slate-type = 'link' style = { aTextStyle }>
			{children}
		</a>
	</Popover>;
};

export default LinkNode;