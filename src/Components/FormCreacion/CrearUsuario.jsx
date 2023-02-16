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
import { postEvent, postUser } from "../../Actions/AppActions/appActions";



function CrearUsuario(){ 

  


  const dispatch = useDispatch();
  
  const [inicialValues, setValues] = useState({
    name:"",
    email:"",
    image:"",
    password:"",
    phone:"",
  })

  

  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
 
    let valores={
      name:values.username,
      email: values.email,
      image:inicialValues.image,
      password:values.contraseña,
      phone:values.teléfono,
     
      }

    setValues({
    name:values.username,
    email: values.email,
  
    password:values.contraseña,
    phone:values.teléfono,
    })
    Swal.fire({
      title: 'Éxito',
      text: 'Tu usuario se creó con éxito',
      icon: 'success',
      confirmButtonText: 'OK'
    })


    var form = true;

    if (form) {
      dispatch(postUser(valores))
       
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


    const agregarFoto = (e) => {
      let file = e.target.files[0]
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setValues({
            image: reader.result
          })
        };
      }
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
      rules={[
        {
          required: true,
          message: 'Por favor subir una imagen',
        },
      ]}
    >
      <input type='file' onChange={agregarFoto} />
       
   
    </Form.Item>




    <Form.Item label="Teléfono"
       name="teléfono"
       rules={[
         {
           required: true,
           message: 'Por favor escribir un número de teléfono',
         },
       ]}>
          <Input placeholder="0112233445566" />
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
      <Input placeholder='***'/>
    </Form.Item>
    

{/*     <Form.Item
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
    </Form.Item> */}


    
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