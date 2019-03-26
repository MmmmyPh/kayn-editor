/**
 * Constants
 */

const IS_MAC = (
	typeof window !== 'undefined' &&
	/Mac|iPod|iPhone|iPad/.test( window.navigator.platform )
);

const MODIFIERS = {
	alt: 'altKey',
	control: 'ctrlKey',
	meta: 'metaKey',
	shift: 'shiftKey'
};

const ALIASES = {
	add: '+',
	break: 'pause',
	cmd: 'meta',
	command: 'meta',
	ctl: 'control',
	ctrl: 'control',
	del: 'delete',
	down: 'arrowdown',
	esc: 'escape',
	ins: 'insert',
	left: 'arrowleft',
	mod: IS_MAC ? 'meta' : 'control',
	opt: 'alt',
	option: 'alt',
	return: 'enter',
	right: 'arrowright',
	space: ' ',
	spacebar: ' ',
	up: 'arrowup',
	win: 'meta',
	windows: 'meta',
};

const CODES = {
	backspace: 8,
	tab: 9,
	enter: 13,
	shift: 16,
	control: 17,
	alt: 18,
	pause: 19,
	capslock: 20,
	escape: 27,
	' ': 32,
	pageup: 33,
	pagedown: 34,
	end: 35,
	home: 36,
	arrowleft: 37,
	arrowup: 38,
	arrowright: 39,
	arrowdown: 40,
	insert: 45,
	delete: 46,
	meta: 91,
	numlock: 144,
	scrolllock: 145,
	';': 186,
	'=': 187,
	',': 188,
	'-': 189,
	'.': 190,
	'/': 191,
	'`': 192,
	'[': 219,
	'\\': 220,
	']': 221,
	'\'': 222,
};

for ( let f = 1; f < 20; f++ ) {
	CODES[ 'f' + f ] = 111 + f;
}

/**
 * Utils
 */
/**
 *
 * @name toKeyName
 * @param {string} name
 */
const toKeyName = ( name ) => ALIASES[ name.toLowerCase() ] || name;

const toKeyCode = ( name ) => CODES[ toKeyName( name ) ] || name.toUpperCase().charCodeAt( 0 );

/**
 *
 * @name parseHotkey
 * @param {string} hotkey
 * @param {object} options
 */
const parseHotkey = ( hotkey, options ) => {
	const byKey = options && options.byKey;
	let parsed = {};

	// 在hotkey中我们可能会书写 '++'这样的形式，而'+'是被作为hotkey的分隔符的，所以要转换一下
	hotkey = hotkey.replace( '++', '+add' );
	const values = hotkey.split( '+' );
	const { length } = values;

	// 先将所有操作修饰按键置为false，后续检查values中如果有对应的修饰符，会重置为true
	for( const k in MODIFIERS ) {
		parsed[ MODIFIERS[ k ] ] = false;
	}

	for( let value of values ) {
		const optional = value.endsWith( '?' );

		if( optional ) {
			value = value.slice( 0, -1 );
		}

		const name = toKeyName( value );
		const modifier = MODIFIERS[ name ];

		// 如果是单个按键或不是操作修饰符
		if( length === 1 || !modifier ) {
			if( byKey ) {
				parsed[ 'key' ] = name;
			}else{
				parsed[ 'which' ] = toKeyCode( value );
			}
		}

		if( modifier ) {
			parsed[ modifier ] = optional ? null : true;
		}
	}

	return parsed;
};

/**
 *
 * @name compareHotkey
 * @param {object} obj
 * @param {object} event
 * @returns
 */
const compareHotkey = ( obj, event ) => {
	for( const key in obj ) {
		const expected = obj[ key ];
		let actual;

		if( expected === null ) {
			continue;
		}

		if( key === 'key' ) {
			actual = event.key.toLowerCase();
		}else if( key === 'which' ) {
			actual = expected === 91 && event.which === 93 ? 91 : event.which;
		}else {
			actual = event[ key ];
		}
		if( actual === null && expected === false ) {
			continue;
		}

		if( actual !== expected ) {
			return false;
		}
	}

	return true;
};

/**
 *
 * @name isHotkey
 * @param {string | array} hotkey
 * @param {object} options
 * @param {object} event
 * @returns
 */
const isHotkey = ( hotkey, options, event ) => {
	if( options && !( 'byKey' in options ) ) {
		event = options;
		options = null;
	}

	if( !Array.isArray( hotkey ) ) {
		hotkey = [ hotkey ];
	}

	const parsedArr = hotkey.map( keyStr => parseHotkey( keyStr, options ) );
	
	const check = e => parsedArr.some( parsed => compareHotkey( parsed, e ) );

	const is = event === null ? check : check( event );

	return is;
};

const isCodeHotkey = ( hotkey, event ) => isHotkey( hotkey, event );

const isKeyHotkey = ( hotkey, event ) => isHotkey( hotkey, { byKey: true }, event );

export default isHotkey;

export {
	isCodeHotkey,
	isKeyHotkey,
	parseHotkey,
	compareHotkey,
	toKeyCode,
	toKeyName,
};