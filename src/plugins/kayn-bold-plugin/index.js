import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { BOLD } from 'constant/marks';

const KaynBoldPlugin = ( options ) => basicMarkPlugin( 'mod+b', { type: BOLD, tagName: 'strong', className: 'kayn__bold', ...options } );

@basicMarkButtonDecorator( BOLD )
class KaynBoldButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynBoldPlugin;

export { KaynBoldButton };