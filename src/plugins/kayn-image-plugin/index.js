import React, { useState } from 'react';
import { Popover, Button as AntButton } from 'antd';
import Button from '../../components/button';
import Icon from '../../components/icon';
import TITLE from '../../constant/button-title';
import ImageNode from '../../components/imageNode';
import { IMAGE } from '../../constant/blocks';
import { haveBlocks } from '../../utils/have';
import ImageUpload from './image-upload';
import dropOrPasteImage from './drop-or-paste-image';
import { insertImageByChooser, insertImageByDrop } from './insert-single-image';

const KaynImagePlugin = ( opt ) => {
	const options = {
		type: IMAGE,
		getSrc: node => node.data.get( 'src' ),
		getWidth: node => node.data.get( 'width' ),
		getHeight: node => node.data.get( 'height' ),
		getTrueWidth: node => node.data.get( 'trueWidth' ),
		getTrueHeight: node => node.data.get( 'trueHeight' ),
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if ( props.node.type === options.type ) {
				return <ImageNode options = { options } { ...props } />;
			} else {
				return next();
			}
		},
		...dropOrPasteImage( {
			insertImage: insertImageByDrop
		} )
	};
};

export default KaynImagePlugin;

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

	const haveImages = editor ? haveBlocks( editor, IMAGE ) : false;

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
		setVisible( true );
	};

	const handleConfirm = () => {
		fileList.forEach( file => insertImageByChooser( editor, file ) );
		handleCancel();
	};

	return (
		<Popover
			visible = { visible }
			overlayStyle = { { zIndex: 10002 } }
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