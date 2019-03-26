import React from 'react';
import classnames from 'classnames';
import { Editor } from 'slate-react';
import KaynBoldPlugin from 'plugins/kayn-bold-plugin';

const plugins = [
	KaynBoldPlugin()
];

const KaynContent = ( { prefixCls, value, onChange } ) => {
	return (
		<div
			className = { classnames( `${ prefixCls }__content` ) }
		>
			<Editor
				className = { classnames( `${ prefixCls }__core` ) }
				plugins = { plugins }
				value = { value }
				onChange = { onChange }
			/>
		</div>
	);
};

export default KaynContent;