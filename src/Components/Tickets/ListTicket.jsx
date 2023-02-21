import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getTicketId, getTickets} from "../../Actions/AppActions/appActions";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card ,Form , Select, Input} from 'antd';
import './ListTicket.css'




const { Meta } = Card;

export default function ListTicket(){

    const tickets = useSelector((state) => state.tickets);
    const dispatch = useDispatch();
    const [ticket,setTicket] = useState([])
    const [idTicket, setIdTicket] = useState('')
  

    useEffect(()=>{
        (async () => {
          await dispatch(getTickets());
        })();
      },[dispatch])

    useEffect(()=>{
        setTicket(tickets)
        
    },[tickets])


    function buscarIdTicket(e){
        console.log(e.target.value)
        setIdTicket(e.target.value)
      }
    
      useEffect (()=>{
        dispatch(getTicketId(idTicket));
      },[dispatch, idTicket]) 


    return(
        <div className='contenedor-form'>
            <h3>Tickets</h3>

            <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input placeholder={idTicket} onChange={(e)=>buscarIdTicket(e)}/>

      </Form.Item>

            <div className="list-tickets">
             {ticket?.length > 0 ? (
                ticket?.map((t) =>
     /*    <Link to={`/event/${t.id}`}> */
           <Card
                className="ticket"
                key={t.id}
                style={{
                width: 300,
                }}
              
                actions={[
                    <Form.Item label="Estado" className="estado-ticket">
                    <Select>
                      <Select.Option value="aprobado">Aprobado</Select.Option>
                      <Select.Option value="pendiente">Pendiente</Select.Option>
                      <Select.Option value="rechazado">Rechazado</Select.Option>
                      <Select.Option value="cancelado">Cancelado</Select.Option>
                    </Select>
                  </Form.Item>

                ]}
            >
                
                <Meta
                avatar={<Avatar src={t.user.image} alt={t.user.name} />}
                title={t.id}
                description={
                    <div>
                    
                    <p>Cantidad tickets:{t.amount}</p>
                    <p>Total de la compra:{t.totalOfPurchase}</p>
                    <p>Metodo de pago:{t.methodOfPurchase}</p>
                    </div>
                }
             
                />
            </Card>
            
         /*    </Link> */
            )) : (
            <h3 className="actividades-disponibles">No se encontraron tickets</h3>
        )}
        </div>
        </div>
    )
}