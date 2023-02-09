import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Canva2(){

	const options = {
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: "Score",
			fontWeight:"lighter",
			fontFamily: "Baskervville",
		},
		data: [{
			fontFamily: "Baskervville",
			type: "pie",
			startAngle: 75,
			toolTipContent: "<b>{label}</b>: {y}%",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}%",
			dataPoints: [
				{ y: 10, label: "1 estrella" , color: "#FAD7A0"},
				{ y: 15, label: "2 estrellas", color: "#ABEBC6" },
				{ y: 35, label: "3 estrellas", color: "#D2B4DE"},
				{ y: 10, label: "4 estrellas", color: "#AED6F1"},
				{ y: 30, label: "5 estrellas", color: "#F5B7B1" },

				
			]
		}]
	}
	return (
	<div>
		<CanvasJSChart options = {options}
			/* onRef={ref => this.chart = ref} */
		/>
		{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
	</div>
		);
}
   