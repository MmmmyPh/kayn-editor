import React, { forwardRef } from 'react';
import classnames from 'classnames';

import './stylus';

const Button = forwardRef( ( {
	prefixCls = 'kayn',
	children,
	onClick,
	isActive,
	disabled,
	className,
	...props
}, ref ) => {
	const handleClick = ( e ) => {
		if( !disabled ) {
			onClick( e );
		}
	};

	return (
		<button
			ref = { ref }
			className = { classnames( `${ prefixCls }__btn`, { [ `${ prefixCls }__btn--active` ]: isActive }, { [ `${ prefixCls }__btn--disabled` ]: disabled }, className ) }
			onClick = { handleClick }
			onMouseDown = { e => e.preventDefault() }
			{ ...props }
		>
			{children}
		</button>
	);
} );

export default Button;