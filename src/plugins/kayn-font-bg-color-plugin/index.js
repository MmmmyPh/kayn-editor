import React, { useState, useEffect } from 'react';
import { Popover } from 'antd';
import { ChromePicker } from 'react-color';
import basicMark from 'components/basicMark';
import Button from 'components/button';
import { Background } from 'components/icon';
import TITLE from 'constant/button-title';
import { FONTCOLOR, FONTBGCOLOR } from 'constant/marks';
import overwriteMarks from 'plugins/helpers/overwriteMarks';
import { whatMarkTypesAre } from 'utils/what';

const initialColor = 'rgba(255, 255, 255, 1)';

const KaynFontBgColorPlugin = ( opt ) => {
	const type = FONTBGCOLOR;
	const tagName = 'span';
	const options = {
		className: 'kayn__font-bg-color',
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

export const KaynFontBgColorButton = ( { editor, onChange, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ bgColor, setColor ] = useState( initialColor );

	useEffect( () => {
		if ( editor && whatMarkTypesAre( editor ).has( FONTBGCOLOR ) ) {
			const dataBgColor = editor.value.marks.filter( mark => mark.type === FONTBGCOLOR ).first().getIn( [ 'data', 'bgColor' ] );
			setColor( dataBgColor );
		} else {
			setColor( initialColor );
		}
	} );

	const handleVisibleChange = ( v ) => setVisible( v );

	const handleColorChange = ( curColor, event ) => {
		const { rgb: { r, g, b, a } } = curColor;
		const nextColor = `rgba(${ r },${ g },${ b },${ a })`;
		setColor( nextColor );
		overwriteMarks( editor, {
			type: FONTBGCOLOR,
			data: { bgColor: nextColor }
		} );
	};

	return (
		<Popover
			className = 'test'
			visible = { visible }
			overlayStyle = { { zIndex: 10002 } }
			content = { <ChromePicker
				color = { bgColor }
				onChangeComplete = { handleColorChange }
			/> }
			placement = 'bottomLeft'
			trigger = 'click'
			overlayClassName = 'kayn__color-picker-container'
			onVisibleChange = { handleVisibleChange }
		>
			<Button
				data-title = { TITLE[ FONTBGCOLOR ] }
			>
				<Background fsColor = { bgColor } />
			</Button>
		</Popover>

	);
};

export default KaynFontBgColorPlugin;