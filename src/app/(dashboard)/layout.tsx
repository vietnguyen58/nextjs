import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
      <div className="bg-white">
      <Sidebar/>
      </div>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;