"use client";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSideBar from "@/components/admin/AdminSideBar";
import { useState } from "react";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='flex lg:flex-row flex-col md:flex-row w-full h-screen'>
      <div className='lg:w-1/5 md:w-1/4 w-full'>
        <AdminSideBar
          toggleSidebar={toggleSidebar}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <div className='lg:w-4/5 md:w-3/4 w-full'>
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
}
