import onHotkeyDown from 'plugins/helpers/onHotkeyDown';
import basicMark from 'components/basicMark';

const basicMarkPlugin = ( hotkey, options ) => ( {
	renderMark: props => {
		console.log( props.mark.type );
		console.log( options.type );
		if ( props.mark.type === options.type ) {
			return basicMark( options.tagName, { className: options.className } )( props );
		}
	},
	onKeyDown: onHotkeyDown( hotkey, editor => {
		console.log( '==========' );
		console.log( options.type );
		console.log( '==========' );
		editor.toggleMark( options.type ).focus();
		// 解决中文输入时切换mark导致的多重输入问题
		if ( editor.value.selection.isCollapsed ) {
			editor.insertText( '\u200B' );
		}
	} )
} );

export default basicMarkPlugin;