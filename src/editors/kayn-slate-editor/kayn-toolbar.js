import React from 'react';
import classnames from 'classnames';

const KaynToolbar = ( { prefixCls, children, ...restProps } ) => (
	<div
		className = { classnames( `${ prefixCls }__toolbar`, ) }
		{ ...restProps }
	>
		{children}
	</div>
);

export default KaynToolbar;