import React from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Spin,
  } from 'antd';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getUsers, postUser } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2';
import axios from 'axios';
import './../Login/Login.css'
  // const { Option } = Select;
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };



export default function Register () {

  const usuario = useSelector((state) => state.users);  
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [form] = Form.useForm();

    const { user, isAuthenticated } = useAuth0();
    const { name, email, picture } = user;
    const [data, setData] = useState({
      name: name || '',
      email: email || '',
      image: picture || '',
      phone: '',
    });

    // const [loading, setLoading] = useState(true);

    let dataUser={
      name:data.name,
      email: data.email,
      image:data.image,
      phone:data.phone,
     }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = async () => {
      dispatch(postUser(dataUser));
      axios.post("http://localhost:3001/send_email",{
        mail: user.email,
        subject: "Su registro fue realizado con Exito!",
        message: "Su registro fue concretado de manera exitosa! "
      });
      Swal.fire({
        title: 'Ok!',
        text: 'Tu cuenta ya se ha registrado con Exito!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      await dispatch(getUsers());
      navigate('/');
    };
    
    useEffect(()=>{
      dispatch(getUsers())
      // setLoading(false)
    },[usuario])  
    
      for(let i =0; i < usuario.length; i++){
        if(usuario[i].email === data.email){
          navigate("/")
          Swal.fire({
            title: 'Upss!',
            text: 'Tu cuenta ya se encuentra registrada',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      }
  
    return (
      isAuthenticated&&(
        <div className="contenedor-form">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        className="login-form"
        onFinish={handleSubmit}
        initialValues={{
          email: data.email,
          name: data.name
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'El email no es válido',
            },
            {
              required: true,
              message: 'Por favor escribi tu email',
            },
          ]}
        
        >
         <Input
                value={data.email}
                onChange={handleChange}
              />
        </Form.Item>
  
        <Form.Item
          name="name"
          label="Nombre"
          tooltip="Cual es tu nombre?"
          rules={[
            {
              required: true,
              message: 'Por favor indicá un nombre!',
              whitespace: true,
            },
          ]}
        >
          <Input
          type='text'
          name='name'
            value={data.name}
            onChange={handleChange} 
          />
        </Form.Item>

        <Form.Item
      name="image"
      label="Imagen de Perfil"
      > 
    <img src={data.image} alt="" />


    </Form.Item>
  
        <Form.Item
          name="phone"
          label='Teléfono'
          rules={[
            {
              required: true,
              message: 'Por favor indicá un número de 10 digitos!',
            },
          ]}
        >
          <Input/>
        </Form.Item> 
  
        
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" className='btn-primary' htmlType="submit">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
      </div>)
    );
  };
 