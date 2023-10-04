import React from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
Outlet;

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
