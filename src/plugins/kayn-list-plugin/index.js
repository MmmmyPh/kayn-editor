import React from 'react';
import Lists from '@convertkit/slate-lists';
// import basicNode from 'components/basicNode';
import {
	OL_LIST,
	UL_LIST,
	LIST_ITEM,
}from 'constant/blocks';
import OlListButton from './ol-button';
import UlListButton from './ul-button';

const KaynListPlugin = ( opt ) => {
	// const options = {
	// 	olType: OL_LIST,
	// 	ulType: UL_LIST,
	// 	liType: LIST_ITEM,
	// 	...opt
	// };
	// return {
	// 	renderNode: ( props, editor, next ) => {
	// 		if ( props.node.type === options.olType ) {
	// 			return basicNode( 'ol', { className: 'kayn_ol', ...opt } )( props );
	// 		} else if ( props.node.type === options.ulType ) {
	// 			return basicNode( 'ul', { className: 'kayn_ul', ...opt } )( props );
	// 		} else if ( props.node.type === options.liType ) {
	// 			return basicNode( 'li', { className: 'kayn_li', ...opt } )( props );
	// 		}else {
	// 			return next();
	// 		}
	// 	},
	// };
	return Lists( {
		blocks: {
			ordered_list: OL_LIST,
			unordered_list: UL_LIST,
			list_item: LIST_ITEM,
		},
		classNames: {
			ordered_list: 'ordered-list kayn__ol',
			unordered_list: 'unordered-list kayn__ul',
			list_item: 'list-item kayn__li'
		}
	} );
};

export default KaynListPlugin;

export const KaynListButton = ( props ) => (
	<>
		<OlListButton key = 'list-ol' { ...props } />
		<UlListButton key = 'list-ul' { ...props } />
	</>
);