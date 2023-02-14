import React from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Canva3(){
	
	
		const options = {
			  theme: "light2",
			  animationEnabled: true,
			  exportEnabled: true,
			  title: {
				text: "Energy usage for Air Conditioning",
                fontWeight:"lighter",
			    fontFamily: "Baskervville",
			  },
			  axisY: {
				title: "Energy (in terawatt hours)"
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
					name: "US",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(1990, 0), y: 339},
						{x: new Date(2000, 0), y: 448},
						{x: new Date(2010, 0), y: 588},
						{x: new Date(2016, 0), y: 616}
					]
				},
				{
					type: "stackedArea",
					name: "European Union",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(1990, 0), y: 63},
						{x: new Date(2000, 0), y: 100},
						{x: new Date(2010, 0), y: 149},
						{x: new Date(2016, 0), y: 152}
					]
				},
				{
					type: "stackedArea",
					name: "Japan",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(1990, 0), y: 48},
						{x: new Date(2000, 0), y: 100},
						{x: new Date(2010, 0), y: 119},
						{x: new Date(2016, 0), y: 107},
				]
				},
				{
					type: "stackedArea",
					name: "China",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(1990, 0), y: 7 },
						{x: new Date(2000, 0), y: 45},
						{x: new Date(2010, 0), y: 243},
						{x: new Date(2016, 0), y: 450},
					]
				},
				{
					type: "stackedArea",
					name: "India",
					showInLegend: true,
					xValueFormatString: "YYYY",
					dataPoints: [
						{x: new Date(1990, 0), y: 6},
						{x: new Date(2000, 0), y: 22},
						{x: new Date(2010, 0), y: 49},
						{x: new Date(2016, 0), y: 91},
					]
				}
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

