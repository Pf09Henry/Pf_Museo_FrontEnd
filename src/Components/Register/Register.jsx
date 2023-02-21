import React from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
  } from 'antd';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { postUser, getUsers } from '../../Actions/AppActions/appActions';
import Swal from 'sweetalert2'

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
  const navigate = useNavigate()
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

    const handleSubmit = () => {
      dispatch(postUser(dataUser));
      navigate('/');
    };

    useEffect(()=>{
      dispatch(getUsers())
      // eslint-disable-next-line 
    },[])

    for(let i =0; i < usuario.length; i++){
      if(usuario[i].email === data.email){
        navigate("/")
        return Swal.fire({
          title: 'Upss!',
          text: 'Tu cuenta ya se encuentra registrada',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    }

    // useEffect(()=>{
    //   dispatch(getUsers())
    // })

    // useEffect(()=>{
    //   if(usuario){
    //     const userEmail = usuario.map(e => e.email);
    //     console.log(userEmail)
       
    //     if(userEmail === user.email){
    //       navigate('/')
    //     }
    //   }
    // },[dispatch, ])


    
  
    return (
      isAuthenticated&&(<Form
        {...formItemLayout}
        form={form}
        name="register"
        
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
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
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
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
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
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input/>
        </Form.Item> 
  
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href=" ">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>)
    );
  };
 