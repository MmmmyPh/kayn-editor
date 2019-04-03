import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { ITALIC } from 'constant/marks';

const KaynItalicPlugin = ( options ) => basicMarkPlugin( 'mod+i', { type: ITALIC, tagName: 'i', className: 'kayn__italic', ...options } );

@basicMarkButtonDecorator( ITALIC )
class KaynItalicButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynItalicPlugin;

export { KaynItalicButton };