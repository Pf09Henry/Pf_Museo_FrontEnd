import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import React from "react";
//import { PageLoader } from "./page-loader";

export const AuthenticationGuard = ({ component }) => {
    const { isLoading } = useAuth0();
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
         {isLoading}
      </div>
    ),
  });

  return <Component />;
};