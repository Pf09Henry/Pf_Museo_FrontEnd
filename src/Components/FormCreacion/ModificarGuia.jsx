import React, { useEffect, useState } from 'react';
import {
  Button,
   Form,
  Input,
  Checkbox,

} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch, useSelector } from "react-redux";
import {putGuide , getGuidesName ,getGuides , getGuidesById} from "../../Actions/AppActions/appActions";
import { Avatar, List, Skeleton } from 'antd';



function ModificarGuia(){ 
  
  const dispatch = useDispatch();
  const [nameEvent, setName] = useState("")
  const eventos = useSelector((state) => state.guias);
  const [id, setId] = useState("10350ea1-3161-48fc-a56c-deaf713d3743");
  const [initLoading, setInitLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [inicialValues, setValues] = useState({
    name:"No hay evento",
    image:"No hay evento",
  })
 
  let count = 3

  
 


  function buscarNombre(e){
    console.log(e.target.value)
    setName(e.target.value)
  }

  useEffect (()=>{
    dispatch(getGuidesName(nameEvent));
  },[dispatch, nameEvent]) 

  
 useEffect (()=>{
    dispatch(getGuidesById(id))
    console.log("este id le estoy pasando", id)
  },[dispatch, id])

  useEffect (()=>{
    dispatch(getGuides());
  },[dispatch]) 

  useEffect(() => {
    setInitLoading(false);
        setData(eventos);
        setList(eventos);
  }, [eventos]);


  
 function setDatos(e){
  setId(e)
  const eventoFiltrado= eventos.filter(ev => ev.id === e)
  setValues(eventoFiltrado[0]);
  console.log(eventoFiltrado[0])
  console.log(inicialValues)
 }
  

  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
 
    let valores={
      name:values.username,
      image:values.upload,
      }

    setValues({
    name:values.username,
    image:values.upload,
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu guia se modificó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })
 


    var form = true;

    if (form) {
      dispatch(putGuide(valores, id))

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
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  


return(
  <div className='contenedor-form'>
 
    <h3 className='titulo-form-evento'>Modificar Guia</h3>
 
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
      /* loadMore={loadMore} */
      dataSource={list.slice(0,count)}
      
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
            className='lista-eventos-small'
              avatar={<Avatar src={item.image} />}
              title={item.name}
              
            />
           
            <Button onClick={()=>setDatos(item.id)}>Datos</Button>
           
          </Skeleton>
        </List.Item>
      )}
    />
    </div>

    <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Editar
      </Checkbox>
      <hr></hr>
    <Form

    onValuesChange={onFormLayoutChange}
    disabled={componentDisabled}
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

    <Form.Item
      label="Nombre"
      name="username"
      
    >
      <Input placeholder={inicialValues.name}/>
    </Form.Item>



  <Form.Item
      label="Foto del evento"
      name="upload"
     
    >
      <Input type='file' />
    </Form.Item>








    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}>
      Modificar
      </Button>
    </Form.Item>
  </Form>
  </div>
)};





export default ModificarGuia;