import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkDecorator from 'components/basicMarkDecorator';
import { BOLD } from 'constant/marks';

const KaynBoldPlugin = ( options ) => basicMarkPlugin( 'mod+b', { type: BOLD, tagName: 'strong', className: 'kayn__bold', ...options } );

@basicMarkDecorator( BOLD )
class KaynBoldButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynBoldPlugin;

export { KaynBoldButton };