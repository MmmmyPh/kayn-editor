import React, { useState }  from 'react';
import { Divider, Input } from 'antd';

const editStyle = {
	marginLeft: '15px'
};
const inputStyle = {
	margin: '0 15px',
	width: 170
};
const urlStyle = {
	display: 'inline-block',
	maxWidth: 170,
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	verticalAlign: 'middle',
};

const PopContent = ( { href, node, editor, editing, toggleEditing } ) => {
	const [ hrefValue, setHrefValue ] = useState( href );

	const onDeleteClick = () => editor.unwrapInline( 'link' );

	const onConfirmClick = () => {
		editor.setInlines( {
			href: hrefValue
		} );
		toggleEditing( false );
	};

	if ( editing ) {
		return <>
			<span>
				编辑 URL:
				<Input size = 'small' style = { inputStyle } value = { hrefValue } onChange = { ( e ) => setHrefValue( e.target.value ) } />
			</span>
			<a onClick = { onConfirmClick }>保存</a>
		</>;
	}
	return <>
		<span>
			<span style = { urlStyle }>访问 URL:</span>
			<a style = { urlStyle } href = { href } target = '_blank'>{href}</a>
		</span>
		<a style = { editStyle } onClick = { () => toggleEditing( true ) } >编辑</a>
		<Divider type = 'vertical' />
		<a onClick = { onDeleteClick }>删除</a>
	</>;
};

export default PopContent;