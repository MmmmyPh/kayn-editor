import React, { useState } from 'react';
import { Popover, Button as AntButton } from 'antd';
import Button from '../../components/button';
import Icon from '../../components/icon';
import TITLE from '../../constant/button-title';
import ImageNode from '../../components/imageNode';
import { IMAGE } from '../../constant/inlines';
import { haveInlines } from '../../utils/have';
import ImageUpload from './image-upload';

const KaynImagePlugin = ( opt ) => {
	const options = {
		type: IMAGE,
		getSrc: node => node.data.get( 'src' ),
		getWidth: node => node.data.get( 'width' ),
		getHeight: node => node.data.get( 'height' ),
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if ( props.node.type === options.type ) {
				return <ImageNode options = { options } { ...props } />;
			} else {
				return next();
			}
		}
	};
};

const headerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '5px 0'
};

const ImagePopHeader = ( { onConfirm } ) => (
	<div style = { headerStyle }>
		<span>添加图片</span>
		<AntButton size = 'small' type = 'primary' onClick = { onConfirm }>确认添加</AntButton>
	</div>
);

export const KaynImageButton = ( { editor, onChange, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ fileList, setFileList ] = useState( [] );

	const haveImages = editor ? haveInlines( editor, IMAGE ) : false;

	const handleCancel = () => {
		setVisible( false );
		setFileList( [] );
	};

	const handleVisibleChange = ( v ) => {
		if ( !v ) {
			handleCancel();
		}
	};

	const handleChange = ( fileList ) => {
		setFileList( fileList );
	};

	const handleClick = ( e ) => {
		if ( e ) {
			e.preventDefault();
		}
		// const haveLinks = haveImages( editor, IMAGE );
		// const isExpanded = editor.value.selection.isExpanded;

		// if ( haveLinks ) {
		// 	inlineLinks( editor, IMAGE );
		// } else if ( isExpanded ) {
		// 	setNeedText( false );
		// 	setVisible( true );
		// } else {
		// setNeedText( true );
		setVisible( true );
		// }
	};

	const handleConfirm = () => {
		fileList.forEach( file => {
			editor
				.insertText( '\u200B' )
				.insertInline( {
					type: IMAGE,
					data: {
						src: file.base64Url,
						size: file.size,
						width: file.width,
						height: file.height
					}
				} )
				.insertText( '\u200B' )
				.focus();
		} );
		handleCancel();
	};

	return (
		<Popover
			visible = { visible }
			content = { <ImageUpload
				fileList = { fileList }
				onChange = { handleChange }
			/> }
			title = { <ImagePopHeader onConfirm = { handleConfirm } /> }
			trigger = 'click'
			placement = 'bottom'
			onVisibleChange = { handleVisibleChange }
		>
			<Button
				type = { IMAGE }
				data-title = { TITLE[ IMAGE.toUpperCase() ] }
				onClick = { handleClick }
				isActive = { haveImages }
				{ ...rest }
			>
				<Icon icon = { IMAGE.toUpperCase() } />
			</Button>
		</Popover>
	);
};

export default KaynImagePlugin;