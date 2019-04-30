import React, { useState } from 'react';
import { Popover, Checkbox, InputNumber, Button } from 'antd';

const ImagePopover = ( { editor, node, options } ) => {
	const { getSrc, getWidth, getHeight, getTrueWidth, getTrueHeight } = options;

	const [ ratioLocked, setRatioLocked ] = useState( true );
	const [ width, setWidth ] = useState( () => getWidth( node ) );
	const [ height, setHeight ] = useState( () => getHeight( node ) );

	const setter = {
		setW: setWidth,
		setH: setHeight
	};

	const handleWHChange = ( value, type ) => {
		setter[ `set${ type }` ]( value );
		if ( ratioLocked ) {
			const ratio = getTrueWidth( node ) / getTrueHeight( node );
			switch ( type ) {
				case 'W':
					const nextH = value / ratio;
					setHeight( nextH );
					break;
				case 'H':
					const nextW = value * ratio;
					setWidth( nextW );
					break;
				default:
					break;
			}
		}
	};

	const handleConfirm = () => {
		editor.setBlocks( {
			data: {
				...node.data.toJS(),
				width: width,
				height: height
			}
		} );
	};

	return <div className = 'kayn__img-editor'>
		<div className = 'kayn__img-editor-row'><Checkbox checked = { ratioLocked } onChange = { ( e ) => setRatioLocked( e.target.checked ) }>锁定宽高比</Checkbox></div>
		<div className = 'kayn__img-editor-row'>宽：<InputNumber size = 'small' value = { width } onChange = { ( value ) => handleWHChange( value, 'W' ) } /></div>
		<div className = 'kayn__img-editor-row'>高：<InputNumber size = 'small' value = { height } onChange = { ( value ) => handleWHChange( value, 'H' ) } /></div>
		<div><Button size = 'small' onClick = { handleConfirm }>确定</Button></div>
	</div>;
};

export default ImagePopover;