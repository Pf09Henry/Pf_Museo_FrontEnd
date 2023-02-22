import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import { Spin } from 'antd';
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getUsers } from '../../Actions/AppActions/appActions';



export function Profile() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const usuario = useSelector((state) => state.users);
  const dispatch = useDispatch();

  let rolUser = 'aacaef0e-fd5b-4d0f-ac88-bbffa0a1fe87'
  function searchRol(){
    let userEncontrado = usuario.filter(e=> e.email === user.email)
    console.log(userEncontrado[0].roleId.split())
    let rol = userEncontrado[0].roleId.split()
    console.log(rolUser === rol[0])
    return rol[0]
  }

  useEffect(()=>{
    (async () => {
      await dispatch(getUsers());
    })();
  },[dispatch])
  
  if (isLoading) {
    return <Spin />;
  }
  return (
    isAuthenticated && (
      <div>
        <div className='componente-login'>
        <div className='foto-admin'><a href={searchRol() === rolUser ?  '/perfilUser' : '/dashboard' }><img className="foto-login" src={user.picture} width='300px' height='300px' alt={user.name} /></a><p>{searchRol() === rolUser ?  null : 'Administrador'}</p></div>
      
          <h6 className='texto-login'>¡Hola {user.given_name}, Bienvenido a nuestro museo!</h6>
          
        </div>  
      </div>
  ))
}
