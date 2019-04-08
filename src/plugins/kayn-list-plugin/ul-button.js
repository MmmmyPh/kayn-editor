import React, { Component } from 'react';
import listButtonDecorator from './listButtonDecorator';
import Button from 'components/button';
import { UL_LIST } from 'constant/blocks';

@listButtonDecorator( UL_LIST )
class UlListButton extends Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default UlListButton;