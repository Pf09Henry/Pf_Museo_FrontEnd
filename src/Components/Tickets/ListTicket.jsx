import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getTicketId, getTickets, putTicket} from "../../Actions/AppActions/appActions";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card ,Form , Select, Input, Button} from 'antd';
import './ListTicket.css'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import Swal from 'sweetalert2'
import { Pagination } from 'antd';

const { Meta } = Card;
const { Option } = Select;

export default function ListTicket(){

    const tickets = useSelector((state) => state.tickets);
    const dispatch = useDispatch();
    const [ticket,setTicket] = useState([])
    const [page,setPage] = useState(1)
    const [idTicket, setIdTicket] = useState('')
    const [id, setId] = useState("");
    const [form, setForm ] = useState({
     estado:"",
     id:""
  })

  const [inicialState, setState ] = useState({
    estado:"",
    id:""
 })

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
console.log(tickets.length/5)
      },[dispatch, idTicket]) 


      const onFinish = (values) => {
        console.log('Received values of form: ', values);
     
        let valores={
          statusOfPurchase:values.rol,
          id:inicialState.id
          }
          console.log(valores)
        
        setForm({
          estado:values.estado
        })

        Swal.fire({
          title: 'Éxito',
          text: 'El estado del ticket fue cambiado',
          icon: 'success',
          confirmButtonText: 'OK'
        })
     
    
    
        var form = true;
    
        if (form) {
         dispatch(putTicket(valores,id))
    
        }
      };
      
      const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
          Swal.fire({
              title: 'Ups!',
              text: "Uno o mas datos no fueron cargados",
              icon: 'error',
              confirmButtonText: 'OK'
            })
        };


        function setDatos(e){
          setId(e)
          const ticketFiltrado= ticket.filter(tk => tk.id === e)
          setState({
            id:ticketFiltrado[0].id});
          console.log("EL ID QUE SE LE MANDA",ticketFiltrado[0].id)
       
         }





    return(
        <div className='contenedor-form'>
            <h3>Tickets</h3>

            <Form.Item
      label="Buscar"
    >
      <Input placeholder={idTicket} onChange={(e)=>buscarIdTicket(e)}/>

      </Form.Item>

            <Form
     className="form-review"
     name="basic"
     labelCol={{
     span: 8,
     }}
     wrapperCol={{
     span: 16,
     }}
     style={{
     maxWidth:600  ,
     }}
     initialValues={{
     remember: true,
     }}
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     autoComplete="off"
 >

           

            <div className="list-tickets">
             {ticket?.length > 0 ? (
                ticket.slice(page,page+5).map((t) =>
 
    
           <Card
                className="ticket"
                key={t.id}
                style={{
                width: 300,
                }}
              
          
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


                  <Form.Item
                        name="rol"
                        label="Estado"
                        hasFeedback
                        
                      >
                    <Select defaultValue={t.statusOfPurchase}>
                  
                    <Option value="aprobado" >Aprobado</Option>
                      <Option value="pendiente" >Pendiente</Option>
                      <Option value="rechazado" >Rechazado</Option>
                      <Option value="cancelado" >Cancelado</Option>
                    </Select>
                  </Form.Item>

                <Button onClick={()=>setDatos(t.id)} type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}><IoIosCheckmarkCircleOutline className="icono-react"/></Button>
              
                
              
            </Card>
        
            
       
            )) : (
            <h3 className="actividades-disponibles">No se encontraron tickets</h3>
        )}
        </div>
        
        <Pagination defaultPageSize={5} total={tickets.length+30} current={page} onChange={(e)=>setPage(e)}/>

        </Form>
        </div>
    )
}