import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Singup(){

    const { loginWithRedirect } = useAuth0();
  
    const handleSingup = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/register",
        },
        authorizationParams: {
          screen_hint: "signup",
        },
      });
    };

    console.log(loginWithRedirect)
  
    return (
      <button className="button__login btn btn-success btn-secundario" onClick={handleSingup}>
        Registrarse
      </button>
    );
}