import React from 'react';
import { mapValues } from 'utils/map';
import { FONTSIZE, LETTERSPACING } from 'constant/marks';

export const markStyleAttrs = {
	backgroundColor: mark => mark.data.getIn( [ 'bgColor'/* , 'color' */ ] ),
	color: mark => mark.data.getIn( [ 'color'/* , 'color' */ ] ),
	fontSize: mark => mark.data.get( FONTSIZE ),
	letterSpacing: mark => mark.data.get( LETTERSPACING )
};

const basicMark = ( Tag, { className,...styleAttrs } ) => {
	const BMComponent = ( { attributes, children, mark } ) => (
		<Tag
			{ ...attributes }
			className = { className }
			data-kayn-slate-type = { Tag }
			style = { mapValues( { ...markStyleAttrs, ...styleAttrs }, val => val && val( mark ) ) }
		>
			{children}
		</Tag>
	);

	BMComponent.displayName = `${ Tag }-mark`;

	return BMComponent;
};

export default basicMark;