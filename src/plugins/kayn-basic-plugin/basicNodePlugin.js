import onHotkeyDown from 'plugins/helpers/onHotkeyDown';
import basicNode from 'components/basicNode';
import applyBlockChange from 'plugins/helpers/applyBlockChange';
import isHotkey from 'utils/is-hotkey';
import { PARAGRAPH } from 'constant/blocks';

const basicNodePlugin = ( hotkey, options ) => ( {
	renderNode: ( props, editor, next ) => {
		if ( props.node.type === options.type ) {
			return basicNode( options.tagName, { className: options.className } )( props );
		} else {
			return next();
		}
	},
	onKeyDown: ( event, editor, next ) => {
		if ( event.key === 'Enter' ) {
			const { value } = editor;
			const { blocks } = value;
			const curBlock = blocks.get( 0 );
			if ( curBlock.type === options.type ) {
				return editor.splitBlock().setBlocks( PARAGRAPH );
			} else {
				next();
			}
		} else if ( isHotkey( hotkey, event ) ) {
			// 阻止浏览器默认事件，例如ctrl+u会进入代码审查页面
			event.preventDefault();
			applyBlockChange( editor, options.type );
		} else {
			next();
		}
	}
} );

export default basicNodePlugin;