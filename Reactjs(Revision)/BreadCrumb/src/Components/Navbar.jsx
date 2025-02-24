import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./BreadCrumbs";

const Navbar = () => {
  return (
    <>
      <div className="bg-amber-800">
        <div className="p-4 bg-gray-500 text-white font-bold flex justify-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">AboutUs</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/product">product</NavLink>
        </div>
        <main>
          <Breadcrumbs />
          <Outlet />
        </main>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbar;
