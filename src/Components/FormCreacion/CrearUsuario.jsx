import React, { useState } from 'react';
import {
  Button,
   Form,
  InputNumber,
  Select,
  Input,
  DatePicker,
  Row,
  Col
  
} from 'antd';
import Swal from 'sweetalert2'
import './../FormCreacion/CrearEvento.css'
import { useDispatch } from "react-redux";
import { postEvent } from "../../Actions/AppActions/appActions";



function CrearUsuario(){ 

  


  const dispatch = useDispatch();
  
  const [inicialValues, setValues] = useState({
    name:"",
    startDay:"",
    endDay:"",
    price: 0,
    img:"",
    information:"",
    guide:[{name:""}],
    category:[{name:""}]
  })
  const { TextArea } = Input;

  const { RangePicker } = DatePicker;
  
  const { Option } = Select;
  

  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
 
      let diaIn=(values.dias[0].$d).toString()
      let diaInicio=diaIn.slice(4,15)
      let diaF=(values.dias[1].$d).toString()
      let diaFin=diaF.slice(4,15)
    let valores={
      name:values.username,
      startDay:diaInicio,
      endDay:diaFin,
      price: values.precio,
      img:values.upload,
      information:values.description,
      guide:values.selectGuia,
      category:values.select
      }

    setValues({
    name:values.username,
    startDay:diaInicio,
    endDay:diaFin,
    price: values.precio,
    img:values.upload,
    information:values.description,
    guide:[{name:values.selectGuia}],
    category:[{name:values.select}]
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu usuario se creó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })


    var form = true;

    if (form) {
      dispatch(postEvent(valores))
       
    } else {
      return alert(" A tu usuario le faltan detalles");
    }
    console.log(inicialValues)
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


    const agregarFoto = (e) =>{
      console.log(e.target.files[0])
      let imgvalue = e.target.files[0]
      setValues({
        img:{
          img:{
            imgvalue
        }
      }
      })
    }
  
  

return(
  <div className='contenedor-form'>
    <h3 className='titulo-form-evento'>Crear Usuario</h3>
    <hr></hr>
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

    <Form.Item
      label="Nombre"
      name="username"
      rules={[
        {
          required: true,
          message: 'Por favor escribir un nombre',
        },
      ]}
    >
      <Input  placeholder='Nombre'/>
    </Form.Item>

    <Form.Item
      name="upload"
      label="Foto de perfil"
    >
      <input type="file" onChange={(e)=> agregarFoto(e)}/>
       
   
    </Form.Item>




    <Form.Item label="Teléfono"
       name="teléfono"
       rules={[
         {
           required: true,
           message: 'Por favor escribir un número de teléfono',
         },
       ]}>
    <Input.Group >
      <Row gutter={8}>
        <Col span={5}>
          <Input placeholder="011" />
        </Col>
        <Col span={8}>
          <Input placeholder="26888888" />
        </Col>
      </Row>
    </Input.Group>
    </Form.Item>



    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Por favor escribir un email',
        },
      ]}
    >
      <Input placeholder='ejemplo@ejemplo.com'/>
    </Form.Item>

    

    <Form.Item
      label="Contraseña"
      name="contraseña"
      rules={[
        {
          required: true,
          message: 'Por favor escribir una contraseña',
        },
      ]}
    >
      <Input placeholder='*******'/>
    </Form.Item>
    

    <Form.Item
      name="rol"
      label="Rol"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Por favor elegir un rol',
        },
      ]}
    >
      <Select placeholder="Rol">
    
        <Option value="Usuario">Usuario</Option>
        <Option value="Finanzas">Finanzas</Option>
        <Option value="Administrador">Administrador</Option>
        <Option value="Contenido">Contenido</Option>
      </Select>
    </Form.Item>


    
    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Button type="primary" htmlType="submit" className='btn-secundario' style={{backgroundColor:"rgb(56, 102, 103"}}>
       Crear
      </Button>
    </Form.Item>
  </Form>
  </div>
)};


export default CrearUsuario;