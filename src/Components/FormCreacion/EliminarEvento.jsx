import React, { useEffect, useState } from 'react';
import {
  Button,
   Form,
  Select,
  Input,
  DatePicker
  
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch, useSelector } from "react-redux";
import {deleteEvent , getEventsName ,getEvents , getEventsById} from "../../Actions/AppActions/appActions";
import { Avatar, List, Skeleton } from 'antd';



function Borrar(){ 
  
  const dispatch = useDispatch();
  const [nameEvent, setName] = useState("")
  const eventos = useSelector((state) => state.eventos);
  const [id, setId] = useState("10350ea1-3161-48fc-a56c-deaf713d3743");
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);


  
 


  function buscarNombre(e){
    console.log(e.target.value)
    setName(e.target.value)
  }

  useEffect (()=>{
    dispatch(getEventsName(nameEvent));
  },[dispatch, nameEvent]) 

  
 useEffect (()=>{
    dispatch(getEventsById(id))
    console.log("este id le estoy pasando", id)
  },[dispatch, id])

  useEffect (()=>{
    dispatch(getEvents());
  },[dispatch]) 

  useEffect(() => {
    setInitLoading(false);
        setList(eventos);
  }, [eventos]);



 function setDatos(e){
  setId(e)
  const eventoFiltrado= eventos.filter(ev => ev.id === e)
  console.log(eventoFiltrado[0])
  Swal.fire({
    title: 'Éxito',
    text: 'Tu evento se elimino con éxito',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: "#035d03"
  })
 }



  
 
  
  const onFinish = () => {
 
    Swal.fire({
      title: 'Éxito',
      text: 'Tu evento se modificó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })


    var form = true;

    if (form) {
      dispatch(deleteEvent(id))

    } 

  };
  
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      Swal.fire({
          title: 'Ups!',
          text: "No se encuentra el evento",
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: "#035d03"
        })
    };



return(
  <div className='contenedor-form'>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 
    <h3 className='titulo-form-evento'>Eliminar Evento</h3>

    <hr></hr>
    <div>
      
    <Form.Item
      label="Buscar"
      name="username-buscado"
    >
      <Input placeholder={nameEvent} onChange={(e)=>buscarNombre(e)}/>
     
    </Form.Item>

    <List
      className="demo-loadmore-list "
      loading={initLoading}
     itemLayout="horizontal"
      dataSource={list}
      
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
            className='lista-eventos-small'
              avatar={<Avatar src={item.img} />}
              title={item.name}
              
            />
           
            <Button onClick={()=>setDatos(item.id)} htmlType="submit" >Borrar</Button>
           
          </Skeleton>
        </List.Item>
      )}
    />
    </div>

    </Form>
  </div>
)};


export default Borrar;