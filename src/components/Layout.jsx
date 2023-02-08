import React from "react";
import { Outlet } from "react-router-dom";
import Foooter from "./Foooter";
import Navbar from "./Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Foooter />
        </>
    );
}

export default Layout;
