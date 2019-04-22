import { Block, Text } from 'slate';
import { List } from 'immutable';
import { CODE, CODE_LINE } from 'constant/blocks';
import detectNewline from 'utils/detect-newline';

const DEFAULT_NEWLINE = '\n';

/**
 * @description Deserialize a text into a code block
 *
 */
const deserializeCode = ( text ) => {
	const splitor = detectNewline( text ) || DEFAULT_NEWLINE;

	const lines = List( text.split( splitor ) ).map( line => {
		return Block.create( {
			type: CODE_LINE,
			nodes: [ Text.create( line ) ]
		} );
	} );

	const code = Block.create( {
		type: CODE,
		nodes: lines
	} );

	return code;
};

const setBlocks = ( block, editor ) => {
	// 更改Block
	const descendantBlock = document.getDescendant( block.key );
	const descendantText = descendantBlock.text;
	// 移除所有Node，为了去除各种格式
	descendantBlock.nodes.forEach( node => {
		editor.removeNodeByKey( node.key, { normalize: false } );
	} );
	// 添加text
	const textToInsert = deserializeCode( descendantText );

	textToInsert.nodes.forEach( ( node, index ) => {
		editor.insertNodeByKey( descendantBlock.key, index, node, { normalize: false } );
	} );
};

export default ( editor, lang ) => {
	const { value } = editor;
	const { startBlock, endBlock, blocks, selection, document } = value;

	// blocks.forEach( block => {
	// 	setBlocks(block, editor)
	// } );

	// 更改Block
	const descendantBlock = document.getDescendant( startBlock.key );
	const descendantText = descendantBlock.text;
	// 移除所有Node，为了去除各种格式
	descendantBlock.nodes.forEach( node => {
		editor.removeNodeByKey( node.key, { normalize: false } );
	} );
	// 添加text
	const textToInsert = deserializeCode( descendantText );

	textToInsert.nodes.forEach( ( node, index ) => {
		editor.insertNodeByKey( descendantBlock.key, index, node, { normalize: false } );
	} );

	editor.setNodeByKey( descendantBlock.key, {
		type: CODE,
		data: { codeType: lang } 
	} );

	return editor;
};