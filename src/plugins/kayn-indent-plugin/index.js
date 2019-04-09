import React from 'react';
import Button from 'components/button';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';
import { INDENT, OUTDENT } from 'constant/aligns';

const indentDecorator = ( type ) => ( Component ) => {
	return class IndentDecorator extends React.Component {
		render() {
			const { editor, onChange, ...rest } = this.props;
			const typeName = type || this.props.type;

			const onClick = event => {
				event.preventDefault();
				const { value } = editor;
				if( value.blocks ) {
					value.blocks.forEach( block => {
						const blockIndent = ( block.get( 'data' ) && block.get( 'data' ).get( 'indent' ) ) || 0;
						let indent = blockIndent;
						if ( type === INDENT ) {
							if ( blockIndent <= 8 ) {
								indent = blockIndent + 1;
							}
						} else if ( type === OUTDENT ) {
							if ( blockIndent !== 0 ) {
								indent = blockIndent - 1;
							}
						}
						const newData = block.setIn( [ 'data', 'indent' ], indent );
						editor.setBlocks( newData );
					} );
				}
			};

			return (
				<Component
					type = { typeName }
					data-title = { TITLE[ typeName.toUpperCase() ] }
					onClick = { onClick }
					{ ...rest }
				>
					<Icon icon = { typeName.toUpperCase() } />
				</Component>
			);
		}
	};
};

@indentDecorator( INDENT )
class KaynIndent extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

@indentDecorator( OUTDENT )
class KaynOutdent extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export const KaynIndentButton = ( options ) => (
	<>
		<KaynIndent { ...options } />
		<KaynOutdent { ...options } />
	</>
);