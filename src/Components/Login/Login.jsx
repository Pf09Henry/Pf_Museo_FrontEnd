import React from "react";
//import { LockOutlined, UserOutlined } from '@ant-design/icons';
//import { Button, Checkbox, Form, Input } from 'antd';
import './../Login/Login.css'
//import logo from '../../Imagenes/logo.png'
//import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login(){

    const { loginWithPopup } = useAuth0();
  
    const handleLogin = async () => {
      await loginWithPopup({
        authorizationParams: {
          screen_hint: "signup",
        },
      });
    };
  
    return (
      <button className="button__login btn btn-success btn-secundario" onClick={handleLogin}>
        Ingresar
      </button>
    );
  
}
//   function onFinish(values){
//     
//   };

//   return (
//     <div className="contenedor-form">
//     <img className="img-logo-login" src={logo} alt=" "/>
//     <Form
//       name="normal_login"
//       className="login-form"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[{ required: true, message: 'Debés poner tu usuario' }]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[{ required: true, message: 'Debés poner una contraseña' }]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Contraseña"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Recuérdame</Checkbox>
//         </Form.Item>

//         <a className="login-form-forgot" href="*">
//           Has olvidado tu contraseña
//         </a>
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" className="login-form-button btn-primario">
//           Iniciar Sesión
//         </Button>
//          O <a href="*">Registrate</a>
//       </Form.Item>
//       <Form.Item>
//       <a href="*"><Button type="primary" htmlType="submit" className="login-form-button btn-google"><FcGoogle/> Google </Button></a>
//       </Form.Item>
//     </Form>
//     </div>
//   )
// };

