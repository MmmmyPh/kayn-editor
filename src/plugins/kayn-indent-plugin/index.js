import React from 'react';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';
import { INDENT, OUTDENT } from 'constant/aligns';

const indentDecorator = ( type ) => ( Button ) => {
	return class IndentDecorator extends React.Component {
		render() {
			const { editor, onChange, ...rest } = this.props;
			const typeName = type || this.props.type;

			const onClick = event => {
				event.preventDefault();
				console.log( event );
				// applyBlockChange( editor, typeName );
			};

			return (
				<Button
					type = { typeName }
					data-title = { TITLE[ typeName.toUpperCase() ] }
					onClick = { onClick }
					{ ...rest }
				>
					<Icon icon = { typeName.toUpperCase() } />
				</Button>
			);
		}
	};
};

@indentDecorator( INDENT )
class KaynIndentButton extends React.Component {
	
}
