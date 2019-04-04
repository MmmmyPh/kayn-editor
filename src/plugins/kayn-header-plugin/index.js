import React from 'react';
import { Popover } from 'antd';
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

const plugin = ( type, tagName, hotkey, ...restOptions ) => basicNodePlugin( hotkey, { type, tagName, className: `kayn__${ type }`, ...restOptions } );

export const HeaderOnePlugin = ( type = HEADING_1, ...restOptions ) => plugin( type, 'h1', 'mod+opt+1', ...restOptions );

export const HeaderTwoPlugin = ( type = HEADING_2, ...restOptions ) => plugin( type, 'h2', 'mod+opt+2', ...restOptions );

export const HeaderThreePlugin = ( type = HEADING_3, ...restOptions ) => plugin( type, 'h3', 'mod+opt+3', ...restOptions );

export const HeaderFourPlugin = ( type = HEADING_4, ...restOptions ) => plugin( type, 'h4', 'mod+opt+4', ...restOptions );

export const HeaderFivePlugin = ( type = HEADING_5, ...restOptions ) => plugin( type, 'h5', 'mod+opt+5', ...restOptions );

export const HeaderSixPlugin = ( type = HEADING_6, ...restOptions ) => plugin( type, 'h6', 'mod+opt+6', ...restOptions );

export const KaynHeaderButton = ( { editor, onChange, ...rest } ) => {
	return (
		<Popover
			trigger = 'click'
		>
			<Button
				type = { HEADING }
				data-title = { TITLE[ HEADING ] }
				// onClick={handleClick}
				// isActive={haveLinks}
				{ ...rest }
			>
				<Icon icon = { HEADING.toUpperCase() } />
			</Button>
		</Popover>
	);
};