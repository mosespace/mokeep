import Form from "@/components/dashboard/Form";
import Sidebar from "@/components/dashboard/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className='bg-slate-50 text-black w-full'>
      <Sidebar />
      <div className='ml-16'>{children}</div>
    </div>
  );
}
