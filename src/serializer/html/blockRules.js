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
} from 'constant/blocks';

const dataTextAlign = 'data-textalign';
const dataPaddingLeft = 'data-paddingleft';
const dataLineHeight = 'data-lineheight';
const dataWidth = 'data-width';
const dataHeight = 'data-height';

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
					textAlign: el.getAttribute( dataTextAlign ),
					paddingLeft: el.getAttribute( dataPaddingLeft ),
					lineHeight: el.getAttribute( dataLineHeight ),
					width: el.getAttribute( dataWidth ),
					height: el.getAttribute( dataHeight )
				},
				nodes: next( el.childNodes ),
			};
		}
	},
	// Switch serialize to handle more blocks...
	serialize( obj, children ) {
		if ( obj.object === 'block' ) {
			const blockAttrs = {
				[ dataTextAlign ]: obj.data.get( 'align' ),
				[ dataPaddingLeft ]: obj.data.get( 'indent' ) ? `${ 3 * obj.data.get( 'indent' ) }em` : undefined,
				[ dataLineHeight ]: obj.data.get( 'lineHeight' ),
				[ dataWidth ]: obj.data.get( 'width' ),
				[ dataHeight ]: obj.data.get( 'height' )
			};
			const blockStyleAttrs = {
				textAlign: obj.data.get( 'align' ),
				paddingLeft: obj.data.get( 'indent' ) ? `${ 3 * obj.data.get( 'indent' ) }em` : undefined,
				lineHeight: obj.data.get( 'lineHeight' ),
				width: obj.data.get( 'width' ),
				height: obj.data.get( 'height' )
			};
			switch ( obj.type ) {
				case PARAGRAPH:
					return <p className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</p>;
				case BLOCKQUOTE:
					return <blockquote className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</blockquote>;
				case HEADING_1:
					return <h1 className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h1>;
				case HEADING_2:
					return <h2 className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h2>;
				case HEADING_3:
					return <h3 className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h3>;
				case HEADING_4:
					return <h4 className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h4>;
				case HEADING_5:
					return <h5 className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h5>;
				case HEADING_6:
					return <h6 className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h6>;
				case TABLE:
					return <table className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</table>;
				case TABLE_ROW:
					return <tr className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</tr>;
				case TABLE_CELL:
					return <td className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</td>;
				case OL_LIST:
					return <ol className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</ol>;
				case UL_LIST:
					return <ul className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</ul>;
				case LIST_ITEM:
					return <li className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</li>;
				case IMAGE:
					return <div className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</div>;
				// case 'code':
				// 	return (
				// 		<pre>
				// 			<cod style={blockStyleAttrs}e {...blockAttrs}>{children}</code>
				// 		</pre>
				// 	);
				default:
					return <p className = { obj.data.get( 'className' ) } style = { blockStyleAttrs } { ...blockAttrs }>{children}</p>;
			}
		}
	},
} ];

export default blockRules;