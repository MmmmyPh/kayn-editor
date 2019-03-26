import React from 'react';
import classnames from 'classnames';

const KaynWrapper = ( { prefixCls, className, children, ...restProps } ) => (
	<div
		className = { classnames( `${ prefixCls }__wrapper`, className ) }
		{ ...restProps }
	>
		{children}
	</div>
);

export default KaynWrapper;