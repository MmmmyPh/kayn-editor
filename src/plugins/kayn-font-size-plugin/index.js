import React from 'react';
import { Popover } from 'antd';
import { ChromePicker } from 'react-color';
import basicMark from 'components/basicMark';
import Button from 'components/button';
import { Color } from 'components/icon';
import TITLE from 'constant/button-title';
import { FONTSIZE } from 'constant/marks';
import overwriteMarks from 'plugins/helpers/overwriteMarks';
import { whatMarkTypesAre } from 'utils/what';

const KaynFontSizePlugin = ( opt ) => {
	const type = FONTSIZE;
	const tagName = 'span';
	const options = {
		className: 'kayn__font-size',
		...opt
	};
	return {
		renderMark: ( props, editor, next ) => {
			if ( props.mark.type === type ) {
				return basicMark( tagName, { ...options } )( props );
			} else {
				return next();
			}
		},
	};
};

export default KaynFontSizePlugin;