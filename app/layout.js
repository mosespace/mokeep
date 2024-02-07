import "./globals.css";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import SideBar from "@/components/(frontend)/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "login with | credentials",
  description: "Created by Kisakye Moses using Nextjs 14.04",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          {/* <div className='flex flex-col'></div>
          <div className='flex w-full'>
            <Nav />
            <div className='bg-gray-50 dark:bg-slate-900'>
              <SideBar />
            </div>
          </div> */}
          <div className='flex'>
            <div className='w-64'>
              <SideBar />
            </div>
            <div className='flex flex-col'>
              <Nav />
              {children}
              <Footer />
            </div>
          </div>
        </AuthProvider>
        <Toaster position='top-center' expand={false} richColors closeButton />
      </body>
    </html>
  );
}
