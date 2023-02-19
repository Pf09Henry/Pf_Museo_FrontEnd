import React, { useEffect } from 'react'
import Galery from '../Galery/Galery'
import Carrousell from '../Carrousel/Carrousell'

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../Actions/AppActions/appActions';
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {

  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
    if (isAuthenticated) {
      var existeMailDb = false
      if (existeMailDb === false) {
        for (let i = 0; i < usuario.length; i++) {
          if (usuario[i].email === user.email) {
            existeMailDb = true;
          }
        }
        if(!existeMailDb) return navigate('/register')
      }
    }
    // eslint-disable-next-line 
  }, [dispatch, usuario])


  return (
    <div>
      <Carrousell />
      <Galery />
    </div>

  )
}
