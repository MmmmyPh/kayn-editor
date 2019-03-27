import React from 'react';
import classnames from 'classnames';
import { Map } from 'immutable';
import { KaynBoldButton } from 'plugins/kayn-bold-plugin';
import { KaynItalicButton } from 'plugins/kayn-italic-plugin';

const pluginBtnMap = Map( {
	bold: KaynBoldButton,
	italic: KaynItalicButton
} );

const KaynToolbar = ( { prefixCls, children, runningPlugins, editor, ...restProps } ) => {
	const pluginsArr = runningPlugins.map( ( key, index ) => {
		const Tag = pluginBtnMap.get( key );
		return <Tag
			key = { `${ key }-${ index }` }
			editor = { editor }
		/>;
	} );

	return (
		<div
			className = { classnames( `${ prefixCls }__toolbar` ) }
			{ ...restProps }
		>
			{pluginsArr}
		</div>
	);
}; 

export default KaynToolbar;