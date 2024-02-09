import { Nav } from "@/components/Nav";
import SideBar from "@/components/(frontend)/SideBar";
import { StartNav } from "@/components/(frontend)/StartNav";

export default function Layout({ children }) {
  return (
    <div className='flex lg:flex-row flex-col w-full'>
      <div className='md:w-64 md:block hidden overflow-hidden'>
        <SideBar />
      </div>
      <div className='flex flex-col overflow-hidden'>
        <StartNav />
        <div className='px-4 py-10 my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen'>
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
