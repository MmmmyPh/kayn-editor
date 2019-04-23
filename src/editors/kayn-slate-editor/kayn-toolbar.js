import React from 'react';
import classnames from 'classnames';
import Divider from 'components/divider';
import { Map } from 'immutable';
// import Buttons
import { KaynUndoButton } from 'plugins/kayn-undo-plugin';
import { KaynRedoButton } from 'plugins/kayn-redo-plugin';
import { KaynBoldButton } from 'plugins/kayn-bold-plugin';
import { KaynItalicButton } from 'plugins/kayn-italic-plugin';
import { KaynStrikethoughButton } from 'plugins/kayn-strikethough-plugin';
import { KaynUnderlineButton } from 'plugins/kayn-underline-plugin';
import { KaynSupButton } from 'plugins/kayn-sup-plugin';
import { KaynSubButton } from 'plugins/kayn-sub-plugin';
import { KaynLinkButton } from 'plugins/kayn-link-plugin';
import { KaynHeaderButton } from 'plugins/kayn-header-plugin';
import { KaynBlockquoteButton } from 'plugins/kayn-blockquote-plugin';
import { KaynCodeButton } from 'plugins/kayn-code-plugin';
import { KaynCodeBlockButton } from 'plugins/kayn-codeblock-plugin';
import { KaynListButton } from 'plugins/kayn-list-plugin';
import { KaynAlignButton } from 'plugins/kayn-align-plugin';
import { KaynIndentButton } from 'plugins/kayn-indent-plugin';
import { KaynFontColorButton } from 'plugins/kayn-font-color-plugin';
import { KaynFontBgColorButton } from 'plugins/kayn-font-bg-color-plugin';
import { KaynTableButton } from 'plugins/kayn-table-plugin';
import Fullscreen from 'components/fullscreen';

const pluginBtnMap = Map( {
	divider: Divider,
	undo: KaynUndoButton,
	redo: KaynRedoButton,
	bold: KaynBoldButton,
	italic: KaynItalicButton,
	underline: KaynUnderlineButton,
	strikethough: KaynStrikethoughButton,
	sup: KaynSupButton,
	sub: KaynSubButton,
	code: KaynCodeButton,
	link: KaynLinkButton,
	header: KaynHeaderButton,
	blockquote: KaynBlockquoteButton,
	list: KaynListButton,
	align: KaynAlignButton,
	indent: KaynIndentButton,
	color: KaynFontColorButton,
	fontBgColor: KaynFontBgColorButton,
	table: KaynTableButton,
	codeBlock: KaynCodeBlockButton,
} );

const NullTag = () => null;

const KaynToolbar = ( { prefixCls, children, runningPlugins, editor, isFull, goFull, ...restProps } ) => {
	const unRedo = [
		<KaynUndoButton key = 'undo' editor = { editor } />,
		<KaynRedoButton key = 'redo' editor = { editor } />,
		<Divider key = { 'divider--1' } />,
	];
	const pluginsArr = unRedo
		.concat( runningPlugins.map( ( key, index ) => {
			if ( /^divider/.test( key ) ) {
				key = 'divider';
			}
			const Tag = pluginBtnMap.get( key ) || NullTag;
			return <Tag
				key = { `${ key }-${ index }` }
				editor = { editor }
			/>;
		} ) )
		.concat( [
			<Divider key = { 'divider--2' } />, 
			<Fullscreen key = 'fullscreen' isFull = { isFull } goFull = { goFull } /> 
		] );

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