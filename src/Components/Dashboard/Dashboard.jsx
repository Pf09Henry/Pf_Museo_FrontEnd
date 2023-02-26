import React from "react";
import {Space,Progress } from 'antd';
import Canva1 from './Canva1';
import Canva2 from './Canva2';
import Canva3 from './Canva3';
import { useEffect, useState } from 'react';
import { useDispatch} from "react-redux";
import {  useSelector } from "react-redux";
import { getEvents, getReview , getTickets} from "../../Actions/AppActions/appActions";




export default function Dashboard(){

  
    
        const review = useSelector((state) => state.review);
        const tickets = useSelector((state) => state.tickets);
        const eventos = useSelector((state) => state.eventos);
        const dispatch = useDispatch();
        const [list, setList] = useState([]);
        const [tick, setTick] = useState([]);
        const [event, setEvent] = useState([]);
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
          setList(review);
          setTick(tickets);
          setEvent(eventos)
        }, [review,tickets,eventos]);

        useEffect(() => {
          const scoreCounts = {
            5: contarScores(5),
            4: contarScores(4),
            3: contarScores(3),
            2: contarScores(2),
            1: contarScores(1),
          };
          setEvRanking(scoreCounts);
        /*   console.log(evRanking) */
          
        }, [list]);

        function contarScores(score) {
          let count = 0;
          for (let i = 0; i < list.length; i++) {
            if (list[i].score === score) {
              count++;
            }
          }
          /* console.log((evRanking[5] * 100) /list.length ) */
          return count;
          
        }


        const cuposTotales = event.reduce((acumulado, evento) => acumulado + evento.availability, 0);
        const ticketsVendidos = tick.reduce((acumulado, ticket) => acumulado + ticket.amount, 0);
      /*   console.log(`Se vendieron ${ticketsVendidos} y Quedan ${cuposTotales} cupos en total`); */
      

    return(
        <div className="contenedor-dashboard">
        <div className="card-dashboard">
         <Space wrap className="contenedor-porcentajes">
             <div>
             <p>Tickets vendidos</p>
             <Progress strokeColor="#AED6F1" type="dashboard" percent={Math.round((ticketsVendidos *100) / cuposTotales) } />
             <p>{ticketsVendidos} tickets de {cuposTotales}</p>
             </div>
             <div>
             <p>Cantidad de suscriptores</p>
             <Progress strokeColor="#AED6F1" type="dashboard"  percent={0} gapDegree={30} />
             
             <p>0 suscriptores</p>
             </div>
             <div>
             <p>Cantidad de eventos 5 estrellas</p>
             <Progress strokeColor="#AED6F1" type="dashboard"  percent={Math.round((evRanking[5] * 100) /list.length) } gapDegree={30} />
             <p>{list.length} eventos</p>
            
             </div>
         </Space>
     </div>
     <div className="contenedor-dashboard-canvas">
         <div className="card card-dashboard canva"><Canva1 /></div>
         <div className="card card-dashboard canva"><Canva2 /></div>
        
         {/* <div className="card card-dashboard canva"><Canva3 /></div> */}
     </div>
     </div>
    )
}