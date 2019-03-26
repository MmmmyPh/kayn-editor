import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import Icon from 'components/icon';
import { BOLD } from 'constant/marks';

const KaynBoldPlugin = ( options ) => basicMarkPlugin( 'mod+b', { type: BOLD, tagName: 'strong', className: 'kayn__bold', ...options } );

const KaynBoldButton = () => (
	<Button>
		<Icon icon = { BOLD } />
	</Button>
);

export default KaynBoldPlugin;

export { KaynBoldButton };