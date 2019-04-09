import React, { Component } from 'react';
import Button from 'components/button';
import { ALIGN_LEFT } from 'constant/aligns';
import { alignDecorator } from './align-decorator';

@alignDecorator( ALIGN_LEFT )
class AlignLeftButton extends Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default AlignLeftButton;