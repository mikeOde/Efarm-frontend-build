import React from 'react';
import { Redirect, Route } from "react-router-dom";

function ProtectedCustomerRoute({ component: Component, ...restOfProps }) {
    const userType = localStorage.getItem("user_type");
    return (
        <Route
      {...restOfProps}
      render={(props) =>
        userType === '0' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
    );
}

export default ProtectedCustomerRoute;