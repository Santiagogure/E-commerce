import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/DataProvider";

function PrivateProfile({ children }) {
  const { isLogin } = useContext(AppContext);

  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateProfile;
