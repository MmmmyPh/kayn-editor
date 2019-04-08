import React from 'react';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';
import { isActiveList, toggleList } from 'plugins/helpers/blockList';

const listButtonDecorator = ( type ) => ( Button ) => {
	return class ToggleButtonDecoration extends React.Component {
		render() {
			const { editor, onChange, ...rest } = this.props;
			const typeName = type || this.props.type;

			const onClick = event => {
				event.preventDefault();
				toggleList( typeName, editor );
			};

			const isActive = isActiveList( editor, typeName );

			return (
				<Button
					type = { typeName }
					data-title = { TITLE[ typeName.toUpperCase() ] }
					onClick = { onClick }
					isActive = { isActive }
					{ ...rest }
				>
					<Icon icon = { typeName.toUpperCase() } />
				</Button>
			);
		}
	};
};

export default listButtonDecorator;