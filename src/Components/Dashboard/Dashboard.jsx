import React from "react";
import {Space,Progress, Card, Select} from 'antd';
import { Form ,Button} from 'antd';
import Canva1 from './Canva1';
import Canva2 from './Canva2';
import Canva3 from './Canva3';
import { useEffect, useState } from 'react';
import { useDispatch} from "react-redux";
import {  useSelector } from "react-redux";
import { getEvents, getReview , getTickets, getUsers} from "../../Actions/AppActions/appActions";
import {RxCalendar} from 'react-icons/rx';




export default function Dashboard(){

  
    
        const review = useSelector((state) => state.review);
        const tickets = useSelector((state) => state.tickets);
        const eventos = useSelector((state) => state.eventos);
        const usuarios = useSelector((state) => state.users);
        const dispatch = useDispatch();
        const [list, setList] = useState([]);
        const [tick, setTick] = useState([]);
        const [event, setEvent] = useState([]);
        const [listUser, setListUser] = useState([]);
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
            await dispatch(getUsers());
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
          setListUser(usuarios)
        }, [review,tickets,eventos,usuarios]);

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


        function obtenerNumeroMes(nombreMes) {
          const meses = {
            "enero": 1,
            "febrero": 2,
            "marzo": 3,
            "abril": 4,
            "mayo": 5,
            "junio": 6,
            "julio": 7,
            "agosto": 8,
            "septiembre": 9,
            "octubre": 10,
            "noviembre": 11,
            "diciembre": 12
          };
          return meses[nombreMes.toLowerCase()];
        }

        function obtenerMes(dateString) {
          // Obtener el mes de una fecha en formato "YYYY-MM-DDTHH:mm:ss.sssZ"
          const fecha = new Date(dateString);
          return fecha.getMonth() + 1;
        }
        
      function filtroMes(nombreMesBuscado){
        if(nombreMesBuscado === "todos"){
        setTick(tickets)
        setListUser(usuarios)
        setList(review)
        } else {
        const mesBuscado = obtenerNumeroMes(nombreMesBuscado);

        const objetosFiltrados = tickets.filter(objeto => {
          return obtenerMes(objeto.createdAt) === mesBuscado;
        });
        setTick(objetosFiltrados)

        const objetosFiltradosUser = usuarios.filter(objeto => {
          return obtenerMes(objeto.createdAt) === mesBuscado;
        });
        setListUser(objetosFiltradosUser)

        const objetosFiltradosReview = review.filter(objeto => {
          return obtenerMes(objeto.createdAt) === mesBuscado;
        });
        setList(objetosFiltradosReview)

        }
      
      
      }

      function porcent(){
        if(Math.round((evRanking[5] * 100) /list.length) > 0){
          return Math.round((evRanking[5] * 100) /list.length)
        } else{
          return 0
        }
      }
        

      
        

      


        const countUsersWithSubscription = listUser.reduce((accumulator, user) => {
          if (user.subscriptionId !== null) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);

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
        const sumTickets = tick.reduce((total, ticket) => total + ticket.totalOfPurchase, 0)
      /*   console.log(`Se vendieron ${ticketsVendidos} y Quedan ${cuposTotales} cupos en total`); */
      

    return(
        <div className="contenedor-dashboard">
         <Form.Item placeholder="Mes"   className="select-ant">
                <Select className="select-ant" placeholder= {<RxCalendar/>}>
                  <Select.Option value="todos" > <Button onClick={() => filtroMes('todos')}>Todos</Button></Select.Option>
                  <Select.Option value="enero" > <Button onClick={() => filtroMes('enero')}>Enero</Button></Select.Option>
                  <Select.Option value="febrero" > <Button onClick={() => filtroMes('febrero')}>Febreo</Button></Select.Option>
                  <Select.Option value="marzo" > <Button onClick={() => filtroMes('marzo')}>Marzo</Button></Select.Option>
                  <Select.Option value="abril" > <Button onClick={() => filtroMes('abril')}>Abril</Button></Select.Option>
                  <Select.Option value="mayo" > <Button onClick={() => filtroMes('mayo')}>Mayo</Button></Select.Option>
                  <Select.Option value="junio" > <Button onClick={() => filtroMes('junio')}>Junio</Button></Select.Option>
                  <Select.Option value="julio" > <Button onClick={() => filtroMes('julio')}>Julio</Button></Select.Option>
                  <Select.Option value="agosto" > <Button onClick={() => filtroMes('agosto')}>Agosto</Button></Select.Option>
                  <Select.Option value="septiembre" > <Button onClick={() => filtroMes('septiembre')}>Septiembre</Button></Select.Option>
                  <Select.Option value="octubre" > <Button onClick={() => filtroMes('octubre')}>Octubre</Button></Select.Option>
                  <Select.Option value="noviembre" > <Button onClick={() => filtroMes('noviembre')}>Noviembre</Button></Select.Option>
                  <Select.Option value="diciembre" > <Button onClick={() => filtroMes('diciembre')}>Diciembre</Button></Select.Option>
                
                </Select>
              </Form.Item>
        <div className="card-dashboard">
         <Space wrap className="contenedor-porcentajes">
             <div>
             <p>Tickets vendidos</p>
             <Progress strokeColor="#AED6F1" type="dashboard" percent={Math.round((ticketsVendidos *100) / cuposTotales) } />
             <p>{ticketsVendidos} tickets</p>
             </div>
             <div>
             <p>Cantidad de suscriptores</p>
             <Progress strokeColor="#AED6F1" type="dashboard"  percent={Math.round((countUsersWithSubscription * 100) /listUser.length)} gapDegree={30} />
             
             <p>{countUsersWithSubscription} suscriptores</p>
             </div>
             <div>
             <p>Cantidad de eventos 5 estrellas</p>
             <Progress strokeColor="#AED6F1" type="dashboard"  percent={porcent()} gapDegree={30} />
             <p>{list.length} eventos</p>
            
             </div>
             
         </Space>

         <div className="contenedorCartasFinance">
             

             <Card
             className="card-finance"
              title="Total recaudado"
              bordered={false}
              style={{
                width: 250,
              }}
            >
              <h5>${sumTickets}</h5> 
             
            </Card>

            
            <Card
             className="card-finance"
              title="Total tickets"
              bordered={false}
              style={{
                width: 250,
              }}
            >
             <h5>{cuposTotales}</h5> 
        
            </Card>

            
            <Card
             className="card-finance"
              title="Tickets vendidos"
              bordered={false}
              style={{
                width: 250,
              }}
            >
              <h5>{ticketsVendidos}</h5> 
           
            </Card>

             </div>
     </div>
     <div className="contenedor-dashboard-canvas">
         <div className="card card-dashboard canva"><Canva1 /></div>
         <div className="card card-dashboard canva"><Canva2 /></div>
        
         {/* <div className="card card-dashboard canva"><Canva3 /></div> */}
     </div>
     </div>
    )
}