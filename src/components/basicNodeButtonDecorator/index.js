import React from 'react';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';
import applyBlockChange from 'plugins/helpers/applyBlockChange';
import { haveBlocks } from 'utils/have';

const basicNodeDecorator = ( type ) => ( Button ) => {
	return class ToggleButtonDecoration extends React.Component {
		render() {
			const { editor, onChange, ...rest } = this.props;
			const typeName = type || this.props.type;

			const onClick = event => {
				event.preventDefault();
				applyBlockChange( editor, typeName );
			};

			return (
				<Button
					type = { typeName }
					data-title = { TITLE[ typeName.toUpperCase() ] }
					onClick = { onClick }
					isActive = { editor ? haveBlocks( editor, typeName ) : false }
					{ ...rest }
				>
					<Icon icon = { typeName.toUpperCase() } />
				</Button>
			);
		}
	};
};

export default basicNodeDecorator;