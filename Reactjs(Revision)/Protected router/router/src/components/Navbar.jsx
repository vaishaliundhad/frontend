import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="p-4 bg-green-200 text-black font-bold flex justify-center space-x-8">
          <NavLink to="/">Home </NavLink>
          <NavLink to="/about" >  About Us </NavLink>
          <NavLink to="/help" >  Help</NavLink>
          <NavLink to="/career" >  Career</NavLink>
          {isAuth ? (<button className="bg-red-500  px-4 py-2 rounded text-white"onClick={handleLogout} > Logout</button>)
           : ( <NavLink to="/login" className=" px-4 py-2 bg-blue-700 text-white rounded ">Login</NavLink>)}
           {isAuth ? <NavLink to="/profile">Profile</NavLink> : ""}
        <NavLink to="/signup" className=" px-4 py-2 bg-blue-700 text-white rounded ">SignUp</NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
