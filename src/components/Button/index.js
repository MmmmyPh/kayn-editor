import React from 'react';
import classnames from 'classnames';
import typeCheck from 'utils/type-check';

import './stylus';

const Button = ( {
	prefixCls = 'kayn',
	children,
	onClick,
	isActive,
	className,
	...props
} ) => (
	<button
		className = { classnames( `${ prefixCls }__btn`, { [ `${ prefixCls }__btn--active` ]: isActive }, className ) }
		onClick = { onClick }
		onMouseDown = { e => e.preventDefault() }
		{ ...props }
	>
		{children}
	</button>
);

export default Button;