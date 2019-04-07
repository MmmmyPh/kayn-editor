import { haveBlocks } from 'utils/have';
import { PARAGRAPH } from 'constant/blocks';

export default ( editor, type ) => {
	const isActive = haveBlocks( editor, type );
	return editor.setBlocks( isActive ? PARAGRAPH : type );
};