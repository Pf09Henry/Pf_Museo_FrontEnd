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
		eventoAvail()
		ticketAvail()
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
	/* 	
		
	  }, [list]);

	  function contarScores(score) {
		let count = 0;
		for (let i = 0; i < list.length; i++) {
		  if (list[i].category === score) {
			count++;
		  }
		}
	/* 	
		return count;
		
	  }



	  const cuposPorCategoria = {};
	  const ticketsVendidosPorCategoria = {};
	  // Iteramos por cada objeto en el array y acumulamos los valores de availability
	  function eventoAvail(){
		eventos.reduce((acumulador, evento) => {
		const { category, availability } = evento;
		if (!acumulador[category[0].name]) {
		  acumulador[category[0].name] = availability;
		} else {
		  acumulador[category[0].name] += availability;
		}
		return acumulador;
	  }, cuposPorCategoria);
	  
	  
	  
	}

	

		// Iteramos por cada objeto en el arreglo de tickets
		function ticketAvail(){
		tickets.forEach(ticket => {
		const evento = event.find(evento => evento.id === ticket.event.id);
		
		if (evento) { // Si se encuentra el evento, acumulamos los valores de tickets vendidos por categoría
			const { category } = evento;
			if (!ticketsVendidosPorCategoria[category[0].name]) {
			ticketsVendidosPorCategoria[category[0].name]= ticket.amount;
			
			} else {
			ticketsVendidosPorCategoria[category[0].name]+= ticket.amount;
			}
			
		}
		});
		
		
		setCantEv(ticketsVendidosPorCategoria)
		
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

	/* 









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
				{ label: "Social",  y: cantEv.Social , color: "#fbe4be"  },
				{ label: "Arte", y: cantEv.Arte , color: "#fbe4be" },
				{ label: "Ciencia", y: cantEv.Ciencias, color: "#fbe4be"  },
				{ label: "Ecológico",  y: cantEv.Ecológico , color: "#fbe4be" },
			
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
 