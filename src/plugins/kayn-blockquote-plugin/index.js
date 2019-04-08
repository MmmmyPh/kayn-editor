import React from 'react';
import basicNodePlugin from 'plugins/kayn-basic-plugin/basicNodePlugin';
import Button from 'components/button';
import basicNodeButtonDecorator from 'components/basicNodeButtonDecorator';
import { BLOCKQUOTE } from 'constant/blocks';

const KaynBlockquotePlugin = ( options ) => basicNodePlugin( 'mod+opt+q', { type: BLOCKQUOTE, tagName:'blockquote', className: 'kayn__blockquote', ...options } );

@basicNodeButtonDecorator( BLOCKQUOTE )
class KaynBlockquoteButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynBlockquotePlugin;

export { KaynBlockquoteButton };