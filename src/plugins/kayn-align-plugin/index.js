import React from 'react';
import onHotkeyDown from 'plugins/helpers/onHotkeyDown';
import { applyAlignChange } from './align-decorator';

const plugin = ( hotkey, align, type = 'align', ) => {
	return {
		// renderNode: () => {

		// },
		onKeyDown: onHotkeyDown( hotkey, ( editor ) => {
			applyAlignChange( editor, align, type );
		} )
	};
};

export const AlignCenterPlugin = type => plugin( 'mod+opt+c', 'center', type );

export const AlignLeftPlugin = type => plugin( 'mod+opt+l', 'left', type );

export const AlignRightPlugin = type => plugin( 'mod+opt+r', 'right', type );

const KaynAlignPlugin = ( options ) => {
	return [
		AlignLeftPlugin( options ),
		AlignCenterPlugin( options ),
		AlignRightPlugin( options )
	];
};

export default KaynAlignPlugin;