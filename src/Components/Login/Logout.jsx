import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";;

export default function Logout() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button className="button__logout" onClick={handleLogout}>
      Log Out
    </button>
  );
}


// import { useAuth0 } from "@auth0/auth0-react";

// export default function Login(){
//   const { loginWithRedirect } = useAuth0();
//   return (
//     <button type="primary" className="login-form-button btn-primario" onClick={() => loginWithRedirect()}>Log In</button>
//   )
// };

// {
//   isAuthenticated ?(
// <>  
// <Profile/>
// <Logout/>
// </>
// ) : (
// <Login/>
// )
// }
