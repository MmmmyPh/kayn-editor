import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkDecorator from 'components/basicMarkDecorator';
import { ITALIC } from 'constant/marks';

const KaynItalicPlugin = ( options ) => basicMarkPlugin( 'mod+i', { type: ITALIC, tagName: 'i', className: 'kayn__italic', ...options } );

@basicMarkDecorator( ITALIC )
class KaynItalicButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynItalicPlugin;

export { KaynItalicButton };