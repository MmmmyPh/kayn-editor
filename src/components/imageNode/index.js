import React from 'react';

const prefixCls = 'kayn';

const ImageNode = ( { options, attributes, children, node, isSelected, editor, ...rest } ) => {
	const { getSrc, getWidth, getHeight } = options;
	// console.log( '==========' );
	// console.log( isSelected );
	// console.log( rest );
	// console.log( '==========' );
	return (
		<span 
			{ ...attributes }
			// onClick = { () => {console.log( 1 );} }
			className = { `${ prefixCls }__img-wrapper` }
			style = { { width: getWidth( node ), height: getHeight( node ) } }
		>

			<img src = { getSrc( node ) } />
			{children}
		</span>
	);
};

export default ImageNode;