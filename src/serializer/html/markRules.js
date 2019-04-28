import React from 'react';
import MARK_TAGS from './markTags';
import {
	BOLD,
	ITALIC,
	CODE_IN_LINE,
	STRIKETHROUGH,
	UNDERLINE,
	SUP,
	SUB,
	LETTERSPACING,
	FONTSIZE,
	FONTBGCOLOR,
	FONTCOLOR,
} from 'constant/marks';

const dataBG = 'data-bg';
const dataColor = 'data-color';
const dataFontSize = 'data-fontsize';
const dataLetterSpacing = 'data-letterspacing';
const dataAttrToType = {
	[ dataBG ]: FONTBGCOLOR,
	[ dataColor ]: FONTCOLOR,
	[ dataFontSize ]: FONTSIZE,
	[ dataLetterSpacing ]: LETTERSPACING,
};

// Add a new rule that handles marks...
const markRules = [ {
	deserialize( el, next ) {
		const tagName = el.tagName.toLowerCase();
		let type = MARK_TAGS[ tagName ];
		if ( tagName === 'span' ) {
			Object.entries( dataAttrToType ).forEach( ( [ key, value ] ) => {
				if ( el.hasAttribute( key ) ) {
					type = value;
				}
			} );
		}
		if ( type ) {
			return {
				object: 'mark',
				type: type,
				data: {
					className: el.getAttribute( 'class' ),
					bgColor: el.getAttribute( dataBG ),
					color: el.getAttribute( dataColor ),
					fontSize: el.getAttribute( dataFontSize ),
					letterSpacing: el.getAttribute( dataLetterSpacing ),
				},
				nodes: next( el.childNodes ),
			};
		}
	},
	serialize( obj, children ) {
		if ( obj.object === 'mark' ) {
			const markDataAttrs = {
				[ dataBG ]: obj.data.getIn( [ 'bgColor'/* , 'color' */ ] ),
				[ dataColor ]: obj.data.getIn( [ 'color'/* , 'color' */ ] ),
				[ dataFontSize ]: obj.data.get( FONTSIZE ),
				[ dataLetterSpacing ]: obj.data.get( LETTERSPACING )
			};
			const markStyleAttrs = {
				backgroundColor: obj.data.getIn( [ 'bgColor'/* , 'color' */ ] ),
				color: obj.data.getIn( [ 'color'/* , 'color' */ ] ),
				fontSize: obj.data.get( FONTSIZE ),
				letterSpacing: obj.data.get( LETTERSPACING )
			};
			switch ( obj.type ) {
				case BOLD:
					return <strong className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</strong>;
				case ITALIC:
					return <i className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</i>;
				case UNDERLINE:
					return <u className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</u>;
				case STRIKETHROUGH:
					return <s className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</s>;
				case CODE_IN_LINE:
					return <code className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</code>;
				case SUP:
					return <sup className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</sup>;
				case SUB:
					return <sub className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</sub>;
				default:
					return <span className = { obj.data.get( 'className' ) } style = { markStyleAttrs } { ...markDataAttrs }>{children}</span>;
			}
		}
	},
} ];

export default markRules;