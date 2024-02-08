import AdminHeader from "@/components/admin/AdminHeader";
import AdminSideBar from "@/components/admin/AdminSideBar";

export default function Layout({ children }) {
  return (
    <div className="flex lg:flex-row flex-col md:flex-row w-full p-1">
<div className="lg:w-[20%]">
  <AdminSideBar/>
</div>
    <div className=' lg:w-[80%] w-full'>
      <AdminHeader/>
      {children}</div>
    </div>
  
  );
}