import React from 'react';
import { mapValues } from 'utils/map';

export const nodeStyleAttrs = {
	textAlign: node => node.data.get( 'align' ),
	paddingLeft: node => node.data.get( 'indent' ) ? `${ 3 * node.data.get( 'indent' ) }em` : undefined,
	lineHeight: node => node.data.get( 'lineHeight' ),
	width: node => node.data.get( 'width' ),
	height: node => node.data.get( 'height' )
};

const basicNode = ( Tag, { className, ...styleAttrs } ) => {
	const NodeComponent = ( { attributes, children, node } ) => {
		return (
			<Tag
				{ ...attributes }
				className = { className }
				data-kayn-slate-type = { Tag }
				style = { mapValues( { ...nodeStyleAttrs, ...styleAttrs }, val => val && val( node ) ) }
			>
				{children}
			</Tag>
		);
	};

	NodeComponent.displayName = `${ Tag }-node`;

	return NodeComponent;
};

export default basicNode;