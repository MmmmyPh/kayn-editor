import React from 'react';

export default ( { height, width } ) => (
	<svg className = 'kayn__svg' width = { width } height = { height } viewBox = "0 0 18 18">
		<g style = { { fill: '#ccc' } }>
			<rect height = "10" rx = "1" ry = "1" width = "4" x = "12" y = "2" />
			<rect height = "10" rx = "1" ry = "1" width = "4" x = "2" y = "2" />
		</g>
		<path
			style = { { fill: '#fff' } }
			d = "M11.354,4.146l-2-2a0.5,0.5,0,0,0-.707,0l-2,2A0.5,0.5,0,0,0,7,5H8V6a1,1,0,0,0,2,0V5h1A0.5,0.5,0,0,0,11.354,4.146Z"
		/>
		<rect
			style = { { fill: '#fff' } }
			height = "8"
			rx = "1"
			ry = "1"
			width = "4"
			x = "7"
			y = "8"
		/>
	</svg>
);