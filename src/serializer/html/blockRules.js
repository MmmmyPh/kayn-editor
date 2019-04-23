import React from 'react';
import BLOCK_TAGS from './blockTags';
import {
	PARAGRAPH,
	BLOCKQUOTE,
	HEADING_1,
	HEADING_2,
	HEADING_3,
	HEADING_4,
	HEADING_5,
	HEADING_6,
	TABLE,
	TABLE_ROW,
	TABLE_CELL,
	OL_LIST,
	UL_LIST,
	LIST_ITEM,
	IMAGE
} from '../../constant/blocks';

const blockRules = [ {
	// Switch deserialize to handle more blocks...
	deserialize( el, next ) {
		const type = BLOCK_TAGS[ el.tagName.toLowerCase() ];
		if ( type ) {
			return {
				object: 'block',
				type: type,
				data: {
					className: el.getAttribute( 'class' ),
				},
				nodes: next( el.childNodes ),
			};
		}
	},
	// Switch serialize to handle more blocks...
	serialize( obj, children ) {
		if ( obj.object === 'block' ) {
			switch ( obj.type ) {
				case PARAGRAPH:
					return <p className = { obj.data.get( 'className' ) }>{children}</p>;
				case BLOCKQUOTE:
					return <blockquote className = { obj.data.get( 'className' ) }>{children}</blockquote>;
				case HEADING_1:
					return <h1 className = { obj.data.get( 'className' ) }>{children}</h1>;
				case HEADING_2:
					return <h2 className = { obj.data.get( 'className' ) }>{children}</h2>;
				case HEADING_3:
					return <h3 className = { obj.data.get( 'className' ) }>{children}</h3>;
				case HEADING_4:
					return <h4 className = { obj.data.get( 'className' ) }>{children}</h4>;
				case HEADING_5:
					return <h5 className = { obj.data.get( 'className' ) }>{children}</h5>;
				case HEADING_6:
					return <h6 className = { obj.data.get( 'className' ) }>{children}</h6>;
				case TABLE:
					return <table className = { obj.data.get( 'className' ) }>{children}</table>;
				case TABLE_ROW:
					return <tr className = { obj.data.get( 'className' ) }>{children}</tr>;
				case TABLE_CELL:
					return <td className = { obj.data.get( 'className' ) }>{children}</td>;
				case OL_LIST:
					return <ol className = { obj.data.get( 'className' ) }>{children}</ol>;
				case UL_LIST:
					return <ul className = { obj.data.get( 'className' ) }>{children}</ul>;
				case LIST_ITEM:
					return <li className = { obj.data.get( 'className' ) }>{children}</li>;
				case IMAGE: 
					return <div className = { obj.data.get( 'className' ) }>{children}</div>;
				// case 'code':
				// 	return (
				// 		<pre>
				// 			<code>{children}</code>
				// 		</pre>
				// 	);
				default: 
					return <p className = { obj.data.get( 'className' ) }>{children}</p>;
			}
		}
	},
} ];

export default blockRules;