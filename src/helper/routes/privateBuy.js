import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";

function PrivateRoute({ children }) {
  const { cart, isLogin } = useContext(AppContext);

  if (cart.length <= 0 && !isLogin) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
