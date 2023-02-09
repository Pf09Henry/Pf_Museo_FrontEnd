import React  from 'react';
import CanvasJSReact from './canvasjs.react';
import './Dashboard.css'


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default function Canva1(){	

	const options = {
		animationEnabled: true,
		title: {
			text: "Cantidad de tickets vendidos por categoria",
			fontFamily: "Baskervville",
			fontWeight:"lighter",
		},
		data: [
		{

			
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "Social",  y: 30 , color: "#fbe4be"  },
				{ label: "Arte", y: 25 , color: "#fbe4be" },
				{ label: "Ciencia", y: 26, color: "#fbe4be"  },
				{ label: "Ecológico",  y: 30 , color: "#fbe4be" },
			
			]
		}
		]
	}
	return (
	<div>
		<CanvasJSChart options = {options} className="canva1"
			/* onRef={ref => this.chart = ref} */
		/>
		{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
	</div>
		);
}
 