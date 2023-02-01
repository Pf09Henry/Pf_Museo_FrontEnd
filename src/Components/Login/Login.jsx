import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './../Login/Login.css'
import logo from '../../Imagenes/logo.png'
import { FcGoogle } from "react-icons/fc";

export default function Login(){
    
 
  function onFinish(values){
    console.log('Received values of form: ', values);
  };

  return (
    <div className="contenedor-form">
    <img className="img-logo-login" src={logo} alt=" "/>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Debés poner tu usuario' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Debés poner una contraseña' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recuérdame</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href=" ">
          Has olvidado tu contraseña
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button btn-primario">
          Iniciar Sesión
        </Button>
         O <a href=" ">Registrate</a>
      </Form.Item>
      <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button btn-google"><FcGoogle/> Google </Button>
      </Form.Item>
    </Form>
    </div>
  )
};

