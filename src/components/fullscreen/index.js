import React from 'react';
import Button from 'components/button';
import { Icon } from 'antd';

const Fullscreen = ( { isFull, goFull } ) => {
	return (
		<Button
			data-title = { isFull ? '退出全屏' : '网页全屏' }
			onClick = { goFull }
		>
			<Icon type = { isFull ? 'fullscreen-exit' : 'fullscreen' } />
		</Button>
	);
};

export default Fullscreen;