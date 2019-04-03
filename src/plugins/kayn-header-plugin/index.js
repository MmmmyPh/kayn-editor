import React from 'react';
import { Popover } from 'antd';
import basicNode from 'components/basicNode';
import {
	HEADING,
	HEADING_1,
	HEADING_2,
	HEADING_3,
	HEADING_4,
	HEADING_5,
	HEADING_6,
} from 'constant/blocks';

const KaynHeaderPlugin = ( opt ) => {
	const options = {
		type: HEADING,
		...opt
	};
	return {
		renderNode: ( props, editor, next ) => {
			if( props.node.type === options.type ) {
				return basicNode( options )( props );
			}else{
				return next();
			}
		}
	};
};

const KaynHeaderButton = ( { editor, onChange, ...rest } ) => {
	return (
		<Popover>
			
		</Popover>
	);
};

export default KaynHeaderButton;