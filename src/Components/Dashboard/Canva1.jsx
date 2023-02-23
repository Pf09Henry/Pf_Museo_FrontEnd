import React  from 'react';
import CanvasJSReact from './canvasjs.react';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import { useDispatch} from "react-redux";
import {  useSelector } from "react-redux";
import {getEvents, getTickets} from "../../Actions/AppActions/appActions";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default function Canva1(){	

	
	const tickets = useSelector((state) => state.tickets);
	const eventos = useSelector((state) => state.eventos);
	const dispatch = useDispatch();
	const [list, setList] = useState([]);
	const [event, setEvent] = useState([]);
	const [cantEv, setCantEv] = useState({
		Social:0,
		Arte:0,
		Ciencias:0,
		Ecológico:0,
	  })
	const [evRanking, setEvRanking] = useState({
	  Social:0,
	  Arte:0,
	  Ciencias:0,
	  Ecológico:0,
	})

	useEffect(()=>{
		(async () => {
		  await dispatch(getTickets());
		})();
	  },[dispatch])

	  useEffect(()=>{
		(async () => {
		  await dispatch(getEvents());
		})();
	  },[dispatch])


	  useEffect(() => {
		setList(tickets);
		setEvent(eventos)
	  }, [tickets,eventos]);

	useEffect(() => {
		const scoreCounts = {
		  Social: contarScores("Social"),
		  Arte: contarScores("Arte"),
		  Ciencias: contarScores("Ciencias"),
		  Ecológico: contarScores("Ecológico"),
		
		};
		setEvRanking(scoreCounts);
	/* 	console.log("ticket por categoria",evRanking) */
		
	  }, [list]);

	  function contarScores(score) {
		let count = 0;
		for (let i = 0; i < list.length; i++) {
		  if (list[i].category === score) {
			count++;
		  }
		}
	/* 	console.log("lista tickets",list) */
		return count;
		
	  }

	  function getCategoryFromEventName(eventName, eventsArray) {
		// Buscar el evento en el array
		const event = eventsArray.find(event => event.nombre === eventName);
		
		// Si el evento existe, devolver su categoría
		if (event) {
		  return event.category;
		}
		
		// Si no se encuentra el evento, devolver null o lanzar una excepción
		return null;
	  }

	  const eventName = "Evento 2";
	const eventCategory = getCategoryFromEventName(eventName, event);

	/* console.log(`La categoría del evento ${eventName} es: ${eventCategory}`); */









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
 