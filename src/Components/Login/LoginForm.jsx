import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



export function LoginForm() {
 

  const { user, isAuthenticated } = useAuth0();
  const { name, email, picture } = user;
  const [data, setData] = useState({
    name: name || '',
    email: email || '',
    image: picture || '',
    phone: '',
    password: '',
  });



  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos del formulario al backend aquí
    axios.post('http://localhost:3001/users/post', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });    
  };
  return (
   isAuthenticated && (<div>
      <form onSubmit={handleSubmit}>             
            
              <label>Nombre Completo:</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}                
              />
              <br />
              <div>
                <img src={data.image} alt="img" />
              </div>
              <br />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}              
              />         
              <br />  
              <label>Numero Telefonico:</label>
              <input
                type="number"
                name="phone"
                value={data.phone}
                onChange={handleChange}        
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}        
              />
              <br />
              
              <button type="submit">Send</button>
             
            </form>
    </div>)
  )
}