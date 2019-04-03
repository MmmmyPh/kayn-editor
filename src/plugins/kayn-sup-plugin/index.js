import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { SUP } from 'constant/marks';

const KaynSupPlugin = ( options ) => basicMarkPlugin( 'mod+shift++', { type: SUP, tagName: 'sup', className: 'kayn__sup', ...options } );

@basicMarkButtonDecorator( SUP )
class KaynSupButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynSupPlugin;

export { KaynSupButton };