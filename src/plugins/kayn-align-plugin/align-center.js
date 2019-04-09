import React, { Component } from 'react';
import Button from 'components/button';
import { ALIGN_CENTER } from 'constant/aligns';
import { alignDecorator } from './align-decorator';

@alignDecorator( ALIGN_CENTER )
class AlignCenterButton extends Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default AlignCenterButton;