import React from 'react';
import classnames from 'classnames';
import { Divider } from 'antd';
import { Map } from 'immutable';
// import Buttons
import { KaynUndoButton } from 'plugins/kayn-undo-plugin';
import { KaynRedoButton } from 'plugins/kayn-redo-plugin';
import { KaynBoldButton } from 'plugins/kayn-bold-plugin';
import { KaynItalicButton } from 'plugins/kayn-italic-plugin';
import { KaynStrikethoughButton } from 'plugins/kayn-strikethough-plugin';
import { KaynUnderlineButton } from 'plugins/kayn-underline-plugin';

const pluginBtnMap = Map( {
	divider: Divider,
	undo: KaynUndoButton,
	redo: KaynRedoButton,
	bold: KaynBoldButton,
	italic: KaynItalicButton,
	underline: KaynUnderlineButton,
	strikethough: KaynStrikethoughButton,
} );

const KaynToolbar = ( { prefixCls, children, runningPlugins, editor, ...restProps } ) => {
	const unRedo = [
		<KaynUndoButton key = { 'undo' } editor = { editor } />,
		<KaynRedoButton key = { 'redo' } editor = { editor } />,
		<Divider key = { 'divider-0' } type = 'vertical' />
	];
	const pluginsArr = unRedo.concat( runningPlugins.map( ( key, index ) => {
		const Tag = pluginBtnMap.get( key );
		return <Tag
			key = { `${ key }-${ index }` }
			editor = { editor }
		/>;
	} ) );

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