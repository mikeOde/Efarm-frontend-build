import React from 'react';
import { Redirect, Route } from "react-router-dom";

function ProtectedFarmerRoute({ component: Component, ...restOfProps }) {
    const userType = localStorage.getItem("user_type");
    return (
        <Route
      {...restOfProps}
      render={(props) =>
        userType === '1' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
    );
}

export default ProtectedFarmerRoute;