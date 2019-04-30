import React from 'react';
import { Tooltip } from 'antd';
import Icon from 'components/icon';
import './stylus.styl';

const ToolButton = ( { title, icon, className, toolTipProps, onClick = () => {} } ) => {
	const classStr = `kayn__tool-btn ${ className }`;
	return (
		<Tooltip title = { title } { ...toolTipProps }>
			<span className = { classStr } onMouseDown = { e => e.preventDefault() } onClick = { onClick }>
				{
					typeof icon === 'string' 
						? <Icon icon = { icon } style = { { width: 18, height: 18 } } />
						: icon
				}
			</span>
		</Tooltip >
	);
};

export default ToolButton;