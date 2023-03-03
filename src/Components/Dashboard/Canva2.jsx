import React from 'react';
import CanvasJSReact from './canvasjs.react';
import { useEffect, useState } from 'react';
import { useDispatch} from "react-redux";
import {  useSelector } from "react-redux";
import { getReview } from "../../Actions/AppActions/appActions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Canva2(){

	const review = useSelector((state) => state.review);
	const dispatch = useDispatch();
	const [list, setList] = useState([]);
	const [evRanking, setEvRanking] = useState({
		5:0,
		4:0,
		3:0,
		2:0,
		1:0,
	  })

	  useEffect(()=>{
		(async () => {
		  await dispatch(getReview());
		})();
	  },[dispatch])

	  useEffect(() => {
		setList(review);
		
	  }, [review]);

	  useEffect(() => {
		const scoreCounts = {
		  5: contarScores(5),
		  4: contarScores(4),
		  3: contarScores(3),
		  2: contarScores(2),
		  1: contarScores(1),
		};
		setEvRanking(scoreCounts);
/* 		
		
	  }, [list]);

	  function contarScores(score) {
		let count = 0;
		for (let i = 0; i < list.length; i++) {
		  if (list[i].score === score) {
			count++;
		  }
		}
/* 		
		return count;
		
	  }






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
			toolTipContent: "<b>{label}</b>: {y}",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}",
			dataPoints: [
				{ y: evRanking[1], label: "1 estrella" , color: "#FAD7A0"},
				{ y: evRanking[2], label: "2 estrellas", color: "#ABEBC6" },
				{ y: evRanking[3], label: "3 estrellas", color: "#D2B4DE"},
				{ y: evRanking[4], label: "4 estrellas", color: "#AED6F1"},
				{ y: evRanking[5], label: "5 estrellas", color: "#F5B7B1" },

				
			]
		}]
	}
	return (
	<div>
		<CanvasJSChart options = {options}
		
		/>
		
	</div>
		);
}
   