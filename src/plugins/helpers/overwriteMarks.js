import { getMarkByType } from 'utils/get';
import { whatMarkTypesAre } from 'utils/what';

/**
 *
 * @description 覆盖mark属性
 * @param {Editor} editor
 * @param {object} options
 */
const overwriteMarks = ( editor, options ) => {
	const markType = options.type;
	// 如果当前Selection中的marks中有目标options中的type，那么先清除这些mark的属性
	if( whatMarkTypesAre( editor ).has( markType ) ) {
		getMarkByType( editor, markType ).forEach( mark => editor.removeMark( mark ) );
	}

	// 覆盖上新的mark属性
	editor.addMark( options ).focus();
	// 解决中文输入时切换mark导致的多重输入问题
	if ( editor.value.selection.isCollapsed ) {
		editor.insertText( '\u200B' );
	}
};

export default overwriteMarks;