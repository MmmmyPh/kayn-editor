import React, { Component } from 'react';
import Button from 'components/button';
import { ALIGN_RIGHT } from 'constant/aligns';
import { alignDecorator } from './align-decorator';

@alignDecorator( ALIGN_RIGHT )
class AlignRightButton extends Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default AlignRightButton;