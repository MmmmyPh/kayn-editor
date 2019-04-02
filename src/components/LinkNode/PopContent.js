import React, { useState }  from 'react';
import { Divider, Input } from 'antd';

const prefixCls = 'c-link';

const PopContent = ( { href, editor, editing, toggleEditing } ) => {
	const [ hrefValue, setHrefValue ] = useState( href );

	const onDeleteClick = () => editor.unwrapInline( 'link' );

	const onConfirmClick = () => {
		editor
			.focus()
			.setInlines( {
				data: { href: hrefValue }
			} );
		toggleEditing( false );
	};

	if ( editing ) {
		return <>
				编辑 URL:
			<Input size = 'small' className = { `${ prefixCls }__input` } value = { hrefValue } onChange = { ( e ) => setHrefValue( e.target.value ) } />
			<a onClick = { onConfirmClick }>保存</a>
		</>;
	}
	return <>
		访问 URL:
		<a className = { `${ prefixCls }__anchor--real` } href = { href } target = '_blank'>{href}</a>
		<a className = { `${ prefixCls }__btn` } onClick = { () => toggleEditing( true ) } >编辑</a>
		<Divider type = 'vertical' />
		<a onClick = { onDeleteClick }>删除</a>
	</>;
};

export default PopContent;