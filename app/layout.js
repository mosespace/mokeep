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
          <div className='flex lg:flex-row flex-col w-full'>
            <div className='md:w-64 md:block hidden overflow-hidden'>
              <SideBar />
            </div>
            <div className='flex flex-col overflow-hidden'>
              <Nav />
              <div className='px-4 py-10 my-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen'>
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </AuthProvider>
        <Toaster position='top-center' expand={false} richColors closeButton />
      </body>
    </html>
  );
}