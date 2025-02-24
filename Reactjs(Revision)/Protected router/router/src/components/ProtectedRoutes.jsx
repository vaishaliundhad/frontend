import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useAuth();


  return (
    <div>

      {
        isAuth ? children : <Navigate to="/login"></Navigate>
      }
    </div>

  )

};

export default ProtectedRoutes;

