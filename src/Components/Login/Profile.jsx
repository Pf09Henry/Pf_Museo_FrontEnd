import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

export  function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <div className='componente-login'>
        <img className="foto-login" src={user.picture} width='300px' height='300px' alt={user.name} />    
          <h5 className='texto-login'>¡Hola {user.given_name}, Bienvenido a nuestro museo!</h5>
        </div>  
      </div>
  ))
}
