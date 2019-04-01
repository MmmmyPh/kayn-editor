// import isHotkey from 'is-hotkey';
import isHotkey from 'utils/is-hotkey';

function onHotkeyDown( hotkey, fn ) {
	return function ( event, editor, next ) {
		if ( isHotkey( hotkey, event ) ) {
			// 阻止浏览器默认事件，例如ctrl+u会进入代码审查页面
			event.preventDefault();
			editor.command( fn );
		} else {
			next();
		}
	};
}

export default onHotkeyDown;