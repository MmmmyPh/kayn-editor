import React from 'react';

const basicNode = ( Tag, { className } ) => {
	const NodeComponent = ( { attributes, children } ) => (
		<Tag
			{ ...attributes }
			className = { className }
			data-kayn-slate-type = { Tag }
		>
			{children}
		</Tag>
	);

	NodeComponent.displayName = `${ Tag }-node`;

	return NodeComponent;
};

export default basicNode;