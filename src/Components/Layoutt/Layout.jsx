import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ crrUser, clearUserData }) {
  return (
    <>
      <div className="hhhh">
        <Navbar crrUser={crrUser} clearUserData={clearUserData} />
      </div>

      <Outlet />

      <Footer />
    </>
  );
}
