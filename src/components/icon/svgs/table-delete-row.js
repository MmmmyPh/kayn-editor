import React from 'react';

export default ( { height, width } ) => (
	<svg className = 'kayn__svg' width = { width } height = { height } viewBox = "0 0 18 18">
		<g style = { { stroke: '#fff' } }>
			<rect height = "3" rx = "0.5" ry = "0.5" width = "7" x = "4.5" y = "2.5" />
			<rect height = "3" rx = "0.5" ry = "0.5" width = "7" x = "4.5" y = "12.5" />
		</g>
		<rect
			style = { { fill: '#fff', stroke: '#fff'  } }
			height = "3"
			rx = "0.5"
			ry = "0.5"
			width = "7"
			x = "8.5"
			y = "7.5"
		/>
		<line
			style = { { stroke: '#fff' } }
			x1 = "6.5"
			x2 = "3.5"
			y1 = "7.5"
			y2 = "10.5"
		/>
		<line
			style = { { stroke: '#fff' } }
			x1 = "3.5"
			x2 = "6.5"
			y1 = "7.5"
			y2 = "10.5"
		/>
	</svg>
);