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
	LIST_ITEM_CHILD,
	IMAGE
} from 'constant/blocks';

const dataTextAlign = 'data-textalign';
const dataPaddingLeft = 'data-paddingleft';
const dataLineHeight = 'data-lineheight';
const dataWidth = 'data-width';
const dataHeight = 'data-height';
const dataTrueWidth = 'data-truewidth';
const dataTrueHeight = 'data-trueheight';

const blockRules = [ {
	// Switch deserialize to handle more blocks...
	deserialize( el, next ) {
		const type = BLOCK_TAGS[ el.tagName.toLowerCase() ];
		if ( type ) {
			const indent = el && el.getAttribute && el.getAttribute( dataPaddingLeft ) ? parseInt( el.getAttribute( dataPaddingLeft ) ) / 3 : 0;
			let data = {
				className: el.getAttribute( 'class' ),
				align: el.getAttribute( dataTextAlign ),
				indent: indent,
				lineHeight: el.getAttribute( dataLineHeight ),
			};
			if ( type === IMAGE ) {
				data = Object.assign( data, {
					src: el.getAttribute( 'src' ),
					width: parseFloat( el.getAttribute( dataWidth ) ),
					height: parseFloat( el.getAttribute( dataHeight ) ),
					trueWidth: parseFloat( el.getAttribute( dataTrueWidth ) ),
					trueHeight: parseFloat( el.getAttribute( dataTrueHeight ) ),
				} );
			}
			return {
				object: 'block',
				type: type,
				data: data,
				nodes: next( el.childNodes ),
			};
		}else{
			const elClsStr = el.getAttribute && el.getAttribute( 'class' );
			if( /list-item-child/.test( elClsStr ) ) {
				const indent = el && el.getAttribute && el.getAttribute( dataPaddingLeft ) ? parseInt( el.getAttribute( dataPaddingLeft ) ) / 3 : 0;
				return {
					object: 'block',
					type: LIST_ITEM_CHILD,
					data: {
						className: el.getAttribute( 'class' ),
						align: el.getAttribute( dataTextAlign ),
						indent: indent,
						lineHeight: el.getAttribute( dataLineHeight ),
					},
					nodes: next( el.childNodes ),
				};
			}
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
				[ dataHeight ]: obj.data.get( 'height' ),
				[ dataTrueWidth ]: obj.data.get( 'trueWidth' ),
				[ dataTrueHeight ]: obj.data.get( 'trueHeight' )
			};
			const blockStyleAttrs = {
				textAlign: obj.data.get( 'align' ),
				paddingLeft: obj.data.get( 'indent' ) ? `${ 3 * obj.data.get( 'indent' ) }em` : undefined,
				lineHeight: obj.data.get( 'lineHeight' ),
				width: obj.data.get( 'width' ),
				height: obj.data.get( 'height' )
			};
			const clsStr = obj.data.get('className') || '';
			switch ( obj.type ) {
				case PARAGRAPH:
					return <p className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</p>;
				case BLOCKQUOTE:
					return <blockquote className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</blockquote>;
				case HEADING_1:
					return <h1 className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h1>;
				case HEADING_2:
					return <h2 className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h2>;
				case HEADING_3:
					return <h3 className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h3>;
				case HEADING_4:
					return <h4 className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h4>;
				case HEADING_5:
					return <h5 className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h5>;
				case HEADING_6:
					return <h6 className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</h6>;
				case TABLE:
					return <table className={`kayn__table ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</table>;
				case TABLE_ROW:
					return <tr className={`kayn__tr ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</tr>;
				case TABLE_CELL:
					return <td className={`kayn__td ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</td>;
				case OL_LIST:
					return <ol className={`ordered-list kayn__ol ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</ol>;
				case UL_LIST:
					return <ul className={`unordered-list kayn__ul ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</ul>;
				case LIST_ITEM:
					return <li className={`list-item kayn__li ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</li>;
				case LIST_ITEM_CHILD:
					return <div className={`list-item-child kayn__li-child ${clsStr}`} style={blockStyleAttrs} {...blockAttrs}>{children}</div>;
				case IMAGE:
					return <div className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>
						<img src = { obj.data.get( 'src' ) } width = { obj.data.get( 'width' ) } height = { obj.data.get( 'height' ) } { ...blockAttrs } />
					</div>;
				// case 'code':
				// 	return (
				// 		<pre>
				// 			<cod style={blockStyleAttrs}e {...blockAttrs}>{children}</code>
				// 		</pre>
				// 	);
				default:
					return <p className = { clsStr } style = { blockStyleAttrs } { ...blockAttrs }>{children}</p>;
			}
		}
	},
} ];

export default blockRules;