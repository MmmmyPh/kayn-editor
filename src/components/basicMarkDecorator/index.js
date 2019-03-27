import React from 'react';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';
import { haveMarks } from 'utils/have';

const basicMarkDecorator = ( type ) => ( Button ) => {
	return class ToggleButtonDecoration extends React.Component {
		render() {
			const { editor, onChange, ...rest } = this.props;
			const typeName = type || this.props.type;

			const onClick = event => {
				event.preventDefault();
				editor.toggleMark( typeName );
				// 解决中文输入时切换mark导致的多重输入问题
				if ( editor.value.selection.isCollapsed ) {
					editor.insertText( '\u200B' );
				}
			};

			return (
				<Button 
					type = { type.toLowerCase() } 
					data-title = { TITLE[ type ] } 
					onClick = { onClick }
					isActive = { editor ? haveMarks( editor, typeName ) : false }
					{ ...rest }
				>
					<Icon icon = { type } />
				</Button>
			);
		}
	};
};

export default basicMarkDecorator;