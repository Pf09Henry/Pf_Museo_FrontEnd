import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export  function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <div>
          <h3>¡Hola {user.given_name}, Bienvenido a nuestro museo!</h3>
          
        <img src={user.picture} width='300px' height='300px' alt={user.name} />     
        </div>  
      </div>
  ))
}
