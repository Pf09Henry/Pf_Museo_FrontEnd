import React from "react";
import { Card } from 'antd';
import './../Eventos/EventoList.css'
import { Tag } from 'antd';
import Filtros from "../Filtros/Filtros";
import {  useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getEvents,getCategories } from "../../Actions/AppActions/appActions";



const { Meta } = Card;


export default function EventoList(){
    const Eventos = useSelector((state) => state.eventos);
    
    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(getEvents());
    },[dispatch])

   

  
    return(<div className='evento'>
    <div >
    <h1 className="eventos-disponibles">Eventos</h1>
    </div>

    <div>
    <Filtros />
    </div>
    <div className="list-card-eventos">
    { Eventos?.length > 0 ? (
        Eventos?.map((activity, index) =>
        <Card
        className="carta-evento-list"
            hoverable
            style={{
            width: 240,
            }}
            cover={<img className="img-list-card" alt="example" src={activity.img} />}
        >
            <Meta title={activity.name} 
        
        
        description={
            <div>
        <Tag color="green">{activity.startDay} - {activity.endDay}</Tag>
        <br></br>
        <Tag color="#015129">{activity.category[0].name}</Tag>
        <hr></hr>
        <Tag color="#87d068">${activity.price}</Tag>
        </div>
        }

    />
        </Card>

        )) : (
        <h3  className="actividades-disponibles">No se encontraron eventos</h3>
        
    )}
    </div>
    </div>)
}
