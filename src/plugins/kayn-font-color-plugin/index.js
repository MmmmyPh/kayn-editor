import React, { useState, useEffect } from 'react';
import { Popover } from 'antd';
import { ChromePicker } from 'react-color';
import basicMark from 'components/basicMark';
import Button from 'components/button';
import { Color } from 'components/icon';
import TITLE from 'constant/button-title';
import { FONTCOLOR } from 'constant/marks';
import overwriteMarks from 'plugins/helpers/overwriteMarks';
import { whatMarkTypesAre } from 'utils/what';

const initialColor = 'rgba(0, 0, 0, 0.65)';

const KaynFontColorPlugin = ( opt ) => {
	const type = FONTCOLOR;
	const tagName = 'span';
	const options = {
		className: 'kayn__font-color',
		...opt
	};
	return {
		renderMark: ( props, editor, next ) => {
			if ( props.mark.type === type ) {
				return basicMark( tagName, { ...options } )( props );
			} else {
				return next();
			}
		},
	};
};

export const KaynFontColorButton = ( { editor, onChange, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ color, setColor ] = useState( initialColor );

	useEffect( () => {
		if ( editor && whatMarkTypesAre( editor ).has( FONTCOLOR ) ) {
			const dataColor = editor.value.marks.filter( mark => mark.type === FONTCOLOR ).first().getIn( [ 'data', 'color' ] );
			setColor( dataColor );
		}else{
			setColor( initialColor );
		}
	} );

	const handleVisibleChange = ( v ) => setVisible( v );

	const handleColorChange = ( curColor, event ) => {
		const { rgb: { r,g,b,a } } = curColor;
		const nextColor = `rgba(${ r },${ g },${ b },${ a })`;
		setColor( nextColor );
		overwriteMarks( editor, {
			type: FONTCOLOR,
			data: { color: nextColor }
		} );
	};
	
	return (
		<Popover
			className = 'test'
			visible = { visible }
			content = { <ChromePicker
				color = { color }
				onChangeComplete = { handleColorChange }
			/> }
			placement = 'bottomLeft'
			trigger = 'click'
			overlayClassName = 'kayn__color-picker-container'
			onVisibleChange = { handleVisibleChange }
		>
			<Button
				data-title = { TITLE[ FONTCOLOR ] }
			>
				<Color fsColor = { color } />
			</Button>
		</Popover>
		
	);
};

export default KaynFontColorPlugin;