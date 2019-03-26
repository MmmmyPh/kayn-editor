import React from 'react';

const basicMark = ( Tag, { className } ) => {
	const BMComponent = ( { attributes, children } ) => (
		<Tag
			{ ...attributes }
			className = { className }
			data-kayn-slate-type = { Tag }
		>
			{children}
		</Tag>
	);

	BMComponent.displayName = `${ Tag }-mark`;

	return BMComponent;
};

export default basicMark;