import React from 'react';

const prefixCls = 'kayn';

const ImageNode = ( { options, attributes, children, node, isSelected, editor, ...rest } ) => {
	const { getSrc, getWidth, getHeight } = options;
	// console.log( '==========' );
	// console.log( isSelected );
	// console.log( rest );
	// console.log( '==========' );
	return (
		<div 
			{ ...attributes }
			// onClick = { () => {console.log( 1 );} }
			className = { `${ prefixCls }__img-wrapper` }
			style = { { width: getWidth( node ), height: getHeight( node ) } }
		>

			<img className = { `${ prefixCls }__img` } src = { getSrc( node ) } style = { { width: getWidth( node ), height: getHeight( node ) } } />
			{children}
		</div>
	);
};

export default ImageNode;