import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";


export default function useExistUserDb() {
    const { isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();
    const usuario = useSelector((state) => state.users)
    const [existMail, setExistMail] = React.useState(false)

   function userExist() {
    if (isAuthenticated) {
      if (existMail === false) {
        for (let i = 0; i < usuario.length; i++) {
          if (usuario[i].email === user.email) {
            setExistMail(true);
          }
        }
        if(!existMail) return navigate('/register')
      }
    }}

  return {
    userExist
  }
}
