// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getUsers } from "../../Actions/AppActions/appActions";

export default function LoginForm() { 

  // const usuario = useSelector((state) => state.users)

  // const { isLoading, isAuthenticated, user } = useAuth0();
 
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  //  useEffect(()=>{
  //     dispatch(getUsers())
  //   })

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     if (isAuthenticated) {
  //       const response = await axios.get("https://pfmuseobackend.up.railway.app/users", {
  //         params: {
  //           email: user.email,
  //         }
  //       })
  //       if (response.data) {
  //         setDbUser(response.data);
  //       }
  //     }
  //   };
  //   getUserInfo(usuario);
  // }, [isAuthenticated, user]);

  // useEffect(()=>{   
  //       const userEmail = usuario.find(e => e.email === user.email);
  //       console.log(userEmail)       
  //       if(userEmail){
  //         navigate('/')
  //       }else{
  //         navigate('/register')
  //       }
  //   },[usuario, user.email])

  return (
    <div>
     ...{}
    </div>
  )
}
