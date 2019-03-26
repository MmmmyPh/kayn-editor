import React from 'react';
import classnames from 'classnames';
import { KaynBoldButton } from 'plugins/kayn-bold-plugin';

const KaynToolbar = ( { prefixCls, children, ...restProps } ) => (
	<div
		className = { classnames( `${ prefixCls }__toolbar`, ) }
		{ ...restProps }
	>
		<KaynBoldButton />
	</div>
);

export default KaynToolbar;