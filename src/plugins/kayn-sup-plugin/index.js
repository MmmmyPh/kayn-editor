import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkDecorator from 'components/basicMarkDecorator';
import { SUP } from 'constant/marks';

const KaynSupPlugin = ( options ) => basicMarkPlugin( 'mod+shift++', { type: SUP, tagName: 'sup', className: 'kayn__sup', ...options } );

@basicMarkDecorator( SUP )
class KaynSupButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynSupPlugin;

export { KaynSupButton };