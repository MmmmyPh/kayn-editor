import React from 'react';
import INLINE_TAGS from './inlineTags';
import {
	LINK
} from '../../constant/inlines';

const inlineRules = [ {
	deserialize( el, next ) {
		const type = INLINE_TAGS[ el.tagName.toLowerCase() ];
		if ( type ) {
			return {
				object: 'inline',
				type: type,
				nodes: next( el.childNodes ),
			};
		}
	},
	serialize( obj, children ) {
		if ( obj.object === 'inline' ) {
			switch ( obj.type ) {
				case LINK:
					console.log( '==========' );
					console.log( obj.data.toJS() );
					console.log( '==========' );
					return <a className = { obj.data.get( 'className' ) }>{children}</a>;
				default:
					return <span>{children}</span>;
			}
		}
	},
} ];

export default inlineRules;