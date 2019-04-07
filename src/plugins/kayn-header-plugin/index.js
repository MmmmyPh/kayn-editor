import React,{ useState } from 'react';
import { Popover } from 'antd';
import Button from 'components/button';
import Icon from 'components/icon';
import { haveBlocks } from 'utils/have';
import TITLE from 'constant/button-title';
import basicNodePlugin from 'plugins/kayn-basic-plugin/basicNodePlugin';
import {
	HEADING,
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
import HeaderPop from './header-pop';

const headerSvg = {
	header_one: HeaderOne,
	header_two: HeaderTwo,
	header_three: HeaderThree,
	header_four: HeaderFour,
	header_five: HeaderFive,
	header_six: HeaderSix,
};

const headingTypes = [ HEADING_1, HEADING_2, HEADING_3, HEADING_4, HEADING_5, HEADING_6 ];

const plugin = ( type, tagName, hotkey, ...restOptions ) => basicNodePlugin( hotkey, { type, tagName, className: `kayn__${ type }`, ...restOptions } );

export const HeaderOnePlugin = ( type = HEADING_1, ...restOptions ) => plugin( type, 'h1', 'mod+opt+1', ...restOptions );

export const HeaderTwoPlugin = ( type = HEADING_2, ...restOptions ) => plugin( type, 'h2', 'mod+opt+2', ...restOptions );

export const HeaderThreePlugin = ( type = HEADING_3, ...restOptions ) => plugin( type, 'h3', 'mod+opt+3', ...restOptions );

export const HeaderFourPlugin = ( type = HEADING_4, ...restOptions ) => plugin( type, 'h4', 'mod+opt+4', ...restOptions );

export const HeaderFivePlugin = ( type = HEADING_5, ...restOptions ) => plugin( type, 'h5', 'mod+opt+5', ...restOptions );

export const HeaderSixPlugin = ( type = HEADING_6, ...restOptions ) => plugin( type, 'h6', 'mod+opt+6', ...restOptions );

const HeaderPlugin = ( options ) => {
	return [
		HeaderOnePlugin( options ),
		HeaderTwoPlugin( options ),
		HeaderThreePlugin( options ),
		HeaderFourPlugin( options ),
		HeaderFivePlugin( options ),
		HeaderSixPlugin( options ),
	];
};

export const KaynHeaderButton = ( { editor, onChange, ...rest } ) => {
	const [ visible, setVisible ] = useState( false );

	let haveHeader = false;
	let HeaderIcon = () => <Icon icon = 'HEADING' />;
	if( editor ) {
		haveHeader = haveBlocks( editor, headingTypes );
		const block = editor.value.blocks.get( 0 );
		const blockType = block && block.type;
		if ( headingTypes.findIndex( t => blockType === t ) !== -1 ) {
			HeaderIcon = headerSvg[ blockType ];
		}
	}

	const handleClick = () => {
		setVisible( v => !v );
	};

	const handleVisibleChange = ( v ) => {
		if( !v ) {
			setVisible( false );
		}
	};

	return (
		<Popover
			content = { <HeaderPop 
				editor = { editor }
				onClick = { handleVisibleChange }
			/> }
			visible = { visible }
			trigger = 'click'
			onVisibleChange = { handleVisibleChange }
		>
			<Button
				type = { HEADING }
				data-title = { TITLE[ HEADING ] }
				onClick = { handleClick }
				isActive = { haveHeader }
				{ ...rest }
			>
				<HeaderIcon width = '18px' height = '18px' />
			</Button>
		</Popover>
	);
};

export default HeaderPlugin;