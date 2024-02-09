import Footer from "@/components/Footer";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSideBar from "@/components/admin/AdminSideBar";

export default function Layout({ children }) {
  return (
    <div className="flex lg:flex-row flex-col md:flex-row w-full h-screen">
      <div className="lg:w-1/5 md:w-1/4 w-full">
        <AdminSideBar/>
      </div>
      <div className='lg:w-4/5 md:w-3/4 w-full'>
        <AdminHeader/>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
