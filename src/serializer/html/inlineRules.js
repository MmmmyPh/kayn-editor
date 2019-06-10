import React from 'react';
import INLINE_TAGS from './inlineTags';
import {
	LINK,
	IMAGE,
} from 'constant/inlines';

const inlineRules = [ {
	deserialize( el, next ) {
		const type = INLINE_TAGS[ el.tagName.toLowerCase() ];
		if ( type ) {
			return {
				object: 'inline',
				type: type,
				data: {
					className: el.getAttribute( 'class' ),
					src: el.getAttribute( 'src' ),
					href: el.getAttribute( 'href' ),
					width: el.getAttribute( 'width' ),
					height: el.getAttribute( 'height' ),
				},
				nodes: next( el.childNodes ),
			};
		}
	},
	serialize( obj, children ) {
		if ( obj.object === 'inline' ) {
			switch ( obj.type ) {
				case LINK:
					return <a className = { obj.data.get( 'className' ) } target = '_blank' href = { obj.data.get( 'href' ) }>{children}</a>;
				case IMAGE:
					return <img
						src = { obj.data.get( 'src' ) }
						width = { obj.data.get( 'width' ) } 
						height = { obj.data.get( 'height' ) }
						style = { { display: 'inline-block' } }
					/>;
				default:
					return <span>{children}</span>;
			}
		}
	},
} ];

export default inlineRules;