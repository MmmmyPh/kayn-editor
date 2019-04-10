import React from 'react';

export default ( { height, width, fsColor } ) => (
	<svg className = 'kayn__svg' width = { width } height = { height } viewBox = '0 0 18 18'>
		<line
			style = { {
				stroke: fsColor,
				strokeWidth: 2,
			} }
			x1 = '3'
			x2 = '15'
			y1 = '15'
			y2 = '15'
		/>
		<polyline 
			style = { {
				stroke: fsColor,
				fill: 'transparent',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 2,
			} }
			points = '5.5 11 9 3 12.5 11' 
		/>
		<line style = { { stroke: fsColor, strokeWidth: 2, } } x1 = '11.63' x2 = '6.38' y1 = '9' y2 = '9' />
	</svg>
);