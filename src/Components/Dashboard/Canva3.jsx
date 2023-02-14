import React from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Canva3(){
	
	
		const options = {
			  theme: "light2",
			  animationEnabled: true,
			  exportEnabled: true,
			  title: {
				text: "Tickets vendidos en relación al tiempo",
                fontWeight:"lighter",
			    fontFamily: "Baskervville",
			  },
			  axisY: {
				title: "Cantidad de tickets vendidos"
			  },
			  toolTip: {
				shared: true
			  },
			  legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				
			  },
			  data: [
				{
					type: "stackedArea",
					name: "Ecológico",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(2022, 10), y: 339},
						{x: new Date(2022, 11), y: 448},
						{x: new Date(2022, 12), y: 588},
						{x: new Date(2023, 1), y: 616}
					]
				},
				{
					type: "stackedArea",
					name: "Social",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(2022, 10), y: 63},
						{x: new Date(2022, 11), y: 100},
						{x: new Date(2022, 12), y: 149},
						{x: new Date(2023, 1), y: 152}
					]
				},
				{
					type: "stackedArea",
					name: "Ciencias",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(2022, 10), y: 48},
						{x: new Date(2022, 11), y: 100},
						{x: new Date(2022, 12), y: 119},
						{x: new Date(2023, 1), y: 107},
				]
				},
				{
					type: "stackedArea",
					name: "Arte",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x:new Date(2022, 10), y: 7 },
						{x: new Date(2022, 11), y: 45},
						{x: new Date(2022, 12), y: 243},
						{x: new Date(2023, 1), y: 450},
					]
				},
				
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/*  onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

