import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
 

const RequiredAuth = ({ children }) => {
  const [state, dispatch] = useContext(AuthContext)
  if(!state.Auth){
    return <Navigate to= "/" />
  }
  return children;
};

export default RequiredAuth;
