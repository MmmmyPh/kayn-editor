import React from 'react';
import onHotkeyDown from 'plugins/helpers/onHotkeyDown';
import { applyAlignChange } from './align-decorator';
import AlignLeftButton from './align-left';
import AlignCenterButton from './align-center';
import AlignRightButton from './align-right';

const plugin = ( hotkey, align, type = 'align', ) => {
	return {
		onKeyDown: onHotkeyDown( hotkey, ( editor ) => {
			applyAlignChange( editor, align, type );
		} )
	};
};

const AlignCenterPlugin = type => plugin( 'mod+opt+c', 'center', type );

const AlignLeftPlugin = type => plugin( 'mod+opt+l', 'left', type );

const AlignRightPlugin = type => plugin( 'mod+opt+r', 'right', type );

const KaynAlignPlugin = ( options ) => {
	return [
		AlignLeftPlugin( options ),
		AlignCenterPlugin( options ),
		AlignRightPlugin( options )
	];
};

const KaynAlignButton = ( props ) => (
	<>
		<AlignLeftButton key = 'align-left'{ ...props } />
		<AlignCenterButton key = 'align-center'{ ...props } />
		<AlignRightButton key = 'align-right'{ ...props } />
	</>
);

export default KaynAlignPlugin;

export { KaynAlignButton };