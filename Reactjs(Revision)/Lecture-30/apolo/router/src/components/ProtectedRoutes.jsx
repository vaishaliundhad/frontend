import React, { Children } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ()=>{
  const {isAuth}= useAuth()

  return(
    <div>
      {
        isAuth ? Children :<Navigate to="/login"></Navigate>
      }
    </div>
  )
}