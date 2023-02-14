import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Spin } from "antd";


export  const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
         <Spin />
      </div>
    ),
  });

  return <Component />;
};