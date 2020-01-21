import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  console.log(children, rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}


export default PrivateRoute;
