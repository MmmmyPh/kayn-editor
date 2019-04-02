import React, { useState } from 'react';
import { Popover } from 'antd';
import Button from 'components/button';
import Icon from 'components/icon';
import LinkNode from 'components/LinkNode';
import TITLE from 'constant/button-title';
import { LINK } from 'constant/inlines';
import { haveInlines } from 'utils/have';
import inlineLinks from 'plugins/helpers/inlineLinks';
import LinkForm from './link-form';

const KaynLinkPlugin = ( opt ) => {
	const options = {
		type: LINK,
		getHref: node => node.data.get( 'href' ),
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if( props.node.type === options.type ) {
				return <LinkNode options = { options } { ...props } />;
			}else{
				return next();
			}
		}
	};
};

const initialState = {
	value: null
};

export const KaynLinkButton = ( { editor, onChange, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ url, setUrl ] = useState( initialState );
	const [ text, setText ] = useState( initialState );
	const [ needText, setNeedText ] = useState( false );

	const haveLinks = editor ? haveInlines( editor, LINK ) : false;

	const handleCancel = () => {
		setVisible( false );
		setUrl( initialState );
		setText( initialState );
	};

	const handleVisibleChange = ( v ) => {
		if( !v ) {
			handleCancel();
		}
	};

	const handleFormChange = ( changedFields ) => {
		if ( 'text' in changedFields ) {
			setText( changedFields.text );
		}else if( 'url' in changedFields ) {
			setUrl( changedFields.url );
		}
	};

	const handleClick = ( e ) => {
		if( e ) {
			e.preventDefault();
		}
		const haveLinks = haveInlines( editor, LINK );
		const isExpanded = editor.value.selection.isExpanded;

		if( haveLinks ) {
			inlineLinks( editor, LINK );
		} else if ( isExpanded ) {
			setNeedText( false );
			setVisible( true );
		}else{
			setNeedText( true );
			setVisible( true );
		}
	};

	const handleConfirm = () => {
		if( url.errors === undefined ) {
			inlineLinks( editor, LINK, { href: url.value, text: text.value || url.value } );
			handleCancel();
		}
	};

	return (
		<Popover
			visible = { visible }
			content = { <LinkForm 
				visible = { visible }
				url = { url } 
				text = { text } 
				needText = { needText }
				onChange = { handleFormChange } 
				onConfirm = { handleConfirm }
			/> }
			title = '添加链接'
			trigger = 'click'
			onVisibleChange = { handleVisibleChange }
		>
			<Button
				type = { LINK }
				data-title = { TITLE[ LINK ] }
				onClick = { handleClick }
				isActive = { haveLinks }
				{ ...rest }
			>
				<Icon icon = { LINK.toUpperCase() } />
			</Button>
		</Popover>
	);
};

export default KaynLinkPlugin;