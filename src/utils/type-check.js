/*
* util type-check
*/

/**
* 获取数据的类型
*
* @param {any} data
* @returns {String} Data type of data
*/
const typeCheck = ( data ) => Object.prototype.toString.call( data ).match( /\[object (.*?)\]/ )[ 1 ].toLowerCase();

/**
 * 在typeCheck对象上挂载判断传入参数的类型判断函数
 * 
 * @param {any} obj
 * @returns {Boolean}
 */
[
	'Null',
	'Undefined',
	'Object',
	'Array',
	'String',
	'Number',
	'Boolean',
	'Function',
	'RegExp',
	'Map',
	'Set',
	'WeakMap',
	'WeakSet',
	'Symbol'
].forEach( t => {
	typeCheck[ `is${ t }` ] = ( obj ) => typeCheck( obj ) === t.toLowerCase();
} );

export default typeCheck;