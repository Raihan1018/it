import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto max-w-screen-2xl px-2 md:px-4 lg:px-6">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
