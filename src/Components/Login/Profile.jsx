import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import { Spin } from 'antd';


export function Profile() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <Spin />;
  }
  return (
    isAuthenticated && (
      <div>
        <div className='componente-login'>
        <a href="/dashboard"><img className="foto-login" src={user.picture} width='300px' height='300px' alt={user.name} /></a>
     
          <h6 className='texto-login'>¡Hola {user.given_name}, Bienvenido a nuestro museo!</h6>
        </div>  
      </div>
  ))
}
