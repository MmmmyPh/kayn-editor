import React from 'react';

export default ( { height, width } ) => (
	<svg className = 'kayn__svg' width = { width } height = { height } viewBox = "0 0 18 18">
		<g style = { { fill: '#ccc' } }>
			<rect height = "10" rx = "1" ry = "1" width = "4" x = "2" y = "6" />
			<rect height = "10" rx = "1" ry = "1" width = "4" x = "12" y = "6" />
		</g>
		<rect
			style = { { fill: '#fff' } }
			height = "8"
			rx = "1"
			ry = "1"
			width = "4"
			x = "7"
			y = "2"
		/>
		<path
			style = { { fill: '#fff' } }
			d = "M9.707,13l1.146-1.146a0.5,0.5,0,0,0-.707-0.707L9,12.293,7.854,11.146a0.5,0.5,0,0,0-.707.707L8.293,13,7.146,14.146a0.5,0.5,0,1,0,.707.707L9,13.707l1.146,1.146a0.5,0.5,0,0,0,.707-0.707Z"
		/>
	</svg>
);