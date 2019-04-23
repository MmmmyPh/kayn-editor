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
} from '../../constant/marks';

// Add a new rule that handles marks...
const markRules = [ {
	deserialize( el, next ) {
		const type = MARK_TAGS[ el.tagName.toLowerCase() ];
		if ( type ) {
			return {
				object: 'mark',
				type: type,
				nodes: next( el.childNodes ),
			};
		}
	},
	serialize( obj, children ) {
		if ( obj.object === 'mark' ) {
			switch ( obj.type ) {
				case BOLD:
					return <strong className = { obj.data.get( 'className' ) }>{children}</strong>;
				case ITALIC:
					return <i>{children}</i>;
				case UNDERLINE:
					return <u>{children}</u>;
				case STRIKETHROUGH:
					return <s>{children}</s>;
				case CODE_IN_LINE:
					return <code>{children}</code>;
				case SUP:
					return <sup>{children}</sup>;
				case SUB:
					return <sub>{children}</sub>;
				default:
					return <span>{children}</span>;
			}
		}
	},
} ];

export default markRules;