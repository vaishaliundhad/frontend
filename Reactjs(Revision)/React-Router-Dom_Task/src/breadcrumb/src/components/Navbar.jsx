import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Navbar = () => {
  return (
    <>
      <div className="bg-amber-400">
        <div className="p-4 bg-lime-600 text-white font-bold flex justify-center space-x-24">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">AboutUs</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="career">Career</NavLink>
        </div>
        <main>
          <Breadcrumb />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Navbar;
