import Sidebar from "@/components/adminComponents/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
