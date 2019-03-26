import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import typeCheck from 'util/type-check';

import './stylus';

const Button = ( {
	id,
	type, 
	prefixCls,
	children,
	onClick,
	className,
	style,
	...props
} ) => (
	<button
		id = { id }
		type = { type }
		className = { classnames( `${ prefixCls }__btn`, className ) }
		style = { style }
		onMouseDown = { ( e ) => {
			e.preventDefault();
			typeCheck.isFunction( onClick ) && onClick( e );
		} }
		{ ...props }
	>
		{children}
	</button>
);

Button.propTypes = {
	prefixCls: PropTypes.string
};

Button.defaultProps = {
	prefixCls: 'kayn'
};

export default Button;