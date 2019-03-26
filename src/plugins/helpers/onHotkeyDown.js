// import isHotkey from 'is-hotkey';
import isHotkey from 'utils/is-hotkey';

function onHotkeyDown( hotkey, fn ) {
	return function ( event, editor, next ) {
		if ( isHotkey( hotkey, event ) ) {
			editor.command( fn );
		} else {
			next();
		}
	};
}

export default onHotkeyDown;