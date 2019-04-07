import React from 'react';
import Button from 'components/button';
import applyBlockChange from 'plugins/helpers/applyBlockChange';
import { haveBlocks } from 'utils/have';
import {
	HEADING_1,
	HEADING_2,
	HEADING_3,
	HEADING_4,
	HEADING_5,
	HEADING_6,
} from 'constant/blocks';
import {
	HeaderOne,
	HeaderTwo,
	HeaderThree,
	HeaderFour,
	HeaderFive,
	HeaderSix,
} from 'components/icon';

const headingTypes = [ HEADING_1, HEADING_2, HEADING_3, HEADING_4, HEADING_5, HEADING_6 ];

const headerSvg = {
	header_one: HeaderOne,
	header_two: HeaderTwo,
	header_three: HeaderThree,
	header_four: HeaderFour,
	header_five: HeaderFive,
	header_six: HeaderSix,
};

const PopButton = ( { type, editor, onClick } ) => {
	const Icon = headerSvg[ type ];
	const isActive = editor ? haveBlocks( editor, type ) : false;
	const handleClick = ( event ) => {
		event.preventDefault();
		applyBlockChange( editor, type );
		editor.focus();
		onClick( false );
	};
	return (
		<Button
			type = { type }
			style = { { margin:0 } }
			onClick = { handleClick }
			isActive = { isActive }
		>
			<Icon width = '18' height = '18' /> 
		</Button>
	);
};

const HeaderPop = ( { editor, onClick } ) => {
	return (
		<div>
			{
				headingTypes.map( ( t ) => <PopButton key = { t } type = { t } editor = { editor } onClick = { onClick } /> )
			}
		</div>
	);
};

export default HeaderPop;