import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { UNDERLINE } from 'constant/marks';

const KaynUnderlinePlugin = ( options ) => basicMarkPlugin( 'mod+u', { type: UNDERLINE, tagName: 'u', className: 'kayn__underline', ...options } );

@basicMarkButtonDecorator( UNDERLINE )
class KaynUnderlineButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynUnderlinePlugin;

export { KaynUnderlineButton };