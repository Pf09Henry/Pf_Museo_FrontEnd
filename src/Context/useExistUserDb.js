import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../Actions/AppActions/appActions';
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import React, {useState, useEffect} from "react";


export default function useExistUserDb() {
    const { isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usuario = useSelector((state) => state.users)
    const [existMail, setExistMail] = useState(false)

    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line 
    }, [dispatch, usuario])
    
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

  return [userExist]
}
