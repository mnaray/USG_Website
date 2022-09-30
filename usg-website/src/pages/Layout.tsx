import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout(): JSX.Element {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;
