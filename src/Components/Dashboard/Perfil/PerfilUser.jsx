import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from './../../../Actions/AppActions/appActions';
import { useAuth0 } from "@auth0/auth0-react";

export default function Perfil(){
  const { user} = useAuth0();
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.users);
  

    useEffect (()=>{
      dispatch(getUsers());
  },[dispatch]) 

  function searchIdUser(name){
    let usuarioEncontrado = usuarios.filter(el => el.name === name)
    console.log(usuarioEncontrado[0])
    return usuarioEncontrado[0]
  }




    return(
       <div className='contenedor-form'>
            <h3>Perfil</h3>
            <p>Nombre:{user.name}</p>
            <p>ID:{searchIdUser(user.name).id}</p>
            <p>email:{user.email}</p>
            <p>Foto:<img src={searchIdUser(user.name).image} alt={user.name} ></img></p>
      </div>
    )
}