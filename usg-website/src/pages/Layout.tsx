import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";

function Layout(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BurgerMenu />
      <Outlet />
    </div>
  );
}

export default Layout;
