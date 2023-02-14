import React from "react";
import {Space,Progress } from 'antd';
import Canva1 from './Canva1';
import Canva2 from './Canva2';
import Canva3 from './Canva3';


export default function Dashboard(){
    return(
        <div className="contenedor-dashboard">
        <div className="card-dashboard">
         <Space wrap className="contenedor-porcentajes">
             <div>
             <p>Tickets vendidos</p>
             <Progress strokeColor="#AED6F1" type="dashboard" percent={80} />
             <p>45 tickets</p>
             </div>
             <div>
             <p>Cantidad de suscriptores</p>
             <Progress strokeColor="#AED6F1" type="dashboard" percent={20} gapDegree={30} />
             <p>5 suscriptores</p>
             </div>
             <div>
             <p>Cantidad de eventos 5 estrellas</p>
             <Progress strokeColor="#AED6F1" type="dashboard" percent={90} gapDegree={30} />
             <p>13 eventos</p>
             </div>
         </Space>
     </div>
     <div className="contenedor-dashboard-canvas">
         <div className="card card-dashboard canva"><Canva1 /></div>
         <div className="card card-dashboard canva"><Canva2 /></div>
         <div className="card card-dashboard canva"><Canva3 /></div>
     </div>
     </div>
    )
}