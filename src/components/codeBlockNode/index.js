import React from 'react';

const CodeBlockNode = ( { type, getCodeType, ...restProps } ) => {
	const codeType = getCodeType();
	return (
		<div>
			{codeType}
		</div>
	);
};

export default CodeBlockNode;