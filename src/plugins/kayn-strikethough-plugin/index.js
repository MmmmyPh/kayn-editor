import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { STRIKETHROUGH } from 'constant/marks';

const KaynStrikethoughPlugin = ( options ) => basicMarkPlugin( 'mod+d', { type: STRIKETHROUGH, tagName: 's', className: 'kayn__strikethough', ...options } );

@basicMarkButtonDecorator( STRIKETHROUGH )
class KaynStrikethoughButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynStrikethoughPlugin;

export { KaynStrikethoughButton };