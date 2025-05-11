import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen max-h-screen  bg-[#1a1b1f]  text-white flex flex-col overflow-hidden">
      <div className="flex flex-row h-screen">
        <SideBar />
        <div className="flex flex-col flex-1 max-h-screen">
          <Header />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
