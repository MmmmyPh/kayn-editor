import React, { Component } from 'react';
import listButtonDecorator from './listButtonDecorator';
import Button from 'components/button';
import { OL_LIST } from 'constant/blocks';

@listButtonDecorator( OL_LIST )
class OlListButton extends Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default OlListButton;