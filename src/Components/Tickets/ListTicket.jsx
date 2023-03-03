import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getTickets, putTicket,getTicketEmail} from "../../Actions/AppActions/appActions";
import { useEffect } from 'react';
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
    const [page,setPage] = useState(1);
    const [id, setId] = useState("");
    const [email,setEmail] = useState("")
    const [form, setForm ] = useState({
     estado:"",
     id:""
  })
  let ticketsFiltrados = tickets


  function TicketList(estado) {
    console.log("tickets",ticketsFiltrados)
  
    // Creamos los filtros para cada estado
    const aprobados = tickets.filter(ticket => ticket.statusOfPurchase === 'aprobado');
    const pendientes = tickets.filter(ticket => ticket.statusOfPurchase === 'pendiente');
    const rechazados = tickets.filter(ticket => ticket.statusOfPurchase === 'rechazado');
    const cancelados = tickets.filter(ticket => ticket.statusOfPurchase === 'cancelado');
    console.log("APROBADOS",aprobados)
    console.log("PENDIENTES",pendientes)
    // Seleccionamos el filtro correspondiente
   

    if (estado === 'aprobados') {
      setTicket(aprobados);
    } else if (estado === 'pendientes') {
      setTicket(pendientes);
    } else if (estado === 'rechazados') {
      setTicket(rechazados);
    } else if (estado === 'cancelados') {
      setTicket(cancelados);
    } else {
      // Si el filtro es 'todos' o cualquier otro valor,
      // mostramos la lista completa de tickets
      setTicket(tickets);
    }
  }
  

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
        TicketList()
    },[tickets,ticketsFiltrados])


    function buscaremailTicket(e){
        console.log(e.target.value)

        setEmail(e.target.value)
      }
    
      useEffect (()=>{
        dispatch(getTicketEmail(email));

      },[dispatch, email]) 


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
          confirmButtonText: 'OK',
          confirmButtonColor: "#035d03"
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
              confirmButtonText: 'OK',
              confirmButtonColor: "#035d03"
            })
        };


        function setDatos(e){
          setId(e)
          const ticketFiltrado= ticket.filter(tk => tk.id === e)
          setState({
            id:ticketFiltrado[0].id});
         /*  console.log("EL ID QUE SE LE MANDA",ticketFiltrado[0].id) */
       
         }





    return(
        <div className='contenedor-form'>
            <h3>Tickets</h3>

      <Form.Item placeholder="Filtros"   className="select-ant">
        <Select className="select-ant" placeholder="Filtros" >
          <Select.Option value="todos" > <Button onClick={() => TicketList('todos')}>Todos</Button></Select.Option>
          <Select.Option value="aprobados" > <Button onClick={() => TicketList('aprobados')}>Aprobados</Button></Select.Option>
          <Select.Option value="pendientes" > <Button onClick={() => TicketList('pendientes')}>Pendientes</Button></Select.Option>
          <Select.Option value="rechazados" > <Button onClick={() => TicketList('rechazados')}>Rechazados</Button></Select.Option>
          <Select.Option value="cancelados" > <Button onClick={() => TicketList('cancelados')}>Cancelados</Button></Select.Option>
        </Select>
      </Form.Item>


            <Form.Item
      label="Buscar"
    >
      <Input placeholder={email} onChange={(e)=>buscaremailTicket(e)}/>

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
    /*  autoComplete="off" */
 >

           

            <div className="list-tickets">
             {ticket?.length > 0 ? (

ticket.slice(page-1,page+3).map((t) =>
 
    
           <Card
                className="ticket-dashboard"
                key={t.id}
               
              
          
            >
             
                <Meta
                avatar={<Avatar src={t.user.image} alt={t.user.name} />}
                title={t.user.name}
                description={
                    <div>
                    <p>Id:{t.id}</p>
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
       
        <Pagination defaultPageSize={5} total={tickets.length} current={page} onChange={(e)=>setPage(e)}/>

        </Form>
        </div>
    )
}