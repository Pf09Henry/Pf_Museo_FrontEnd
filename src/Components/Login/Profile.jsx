import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import { Spin } from 'antd';
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getRoles, getUsers } from '../../Actions/AppActions/appActions';
import { useNavigate } from 'react-router-dom';



export function Profile() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const usuario = useSelector((state) => state.users);
  const role = useSelector((state) => state.role);
  console.log(role)

  const navigate = useNavigate();

  let userRole;
  let roleName;

  //   let rolUser = 'aacaef0e-fd5b-4d0f-ac88-bbffa0a1fe87'
  //   function searchRol(){
  //     let userEncontrado = usuario.filter(e=> e.email === user.email)
  //    /*  console.log(userEncontrado[0].roleId.split()) */
  //     let rol = userEncontrado[0].roleId.split()
  // /*     console.log(rolUser === rol[0]) */
  //     return rol[0]
  //   }

  if (isAuthenticated) {
    for (let i = 0; i < usuario.length; i++) {
      if (usuario[i].email === user.email) {
         userRole = usuario[i].roleId;
        console.log('aqui el roleId:',userRole)
      }
    }
    for(let i = 0; i < role.length; i++){
      if(role[i].id === userRole){
        roleName = role[i].name;
        console.log('Aqui el nombre del role:',roleName)        
      }
    }
  }

useEffect(() => {
  if(roleName === 'super_admin'){
    navigate('/dashboard')
  }else if(roleName === 'admin'){
    navigate('/dashboard')
  }else if(roleName === 'finance'){
    navigate('/dashboard')
  }else if(roleName === 'content_creator'){
    navigate('/dashboard')
  }else if(roleName === 'subscriber'){
    navigate('/dashboard')
  }else if(roleName === 'user'){
    navigate('/perfilUser')
  }  
}, [])


  // if (isLoading) {
  //   return <Spin />;
  // }
  return (
    isAuthenticated && (
      <div>
        <div className='componente-login'>
          <div className='foto-admin'>        
          <Spin />        
          </div>
        </div>
      </div>
    ))
}
