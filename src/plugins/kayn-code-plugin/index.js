import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { CODE } from 'constant/marks';

const KaynCodePlugin = ( options ) => basicMarkPlugin( 'mod+`', { type: CODE, tagName: 'code', className: 'kayn__code', ...options } );

@basicMarkButtonDecorator( CODE )
class KaynCodeButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynCodePlugin;

export { KaynCodeButton };