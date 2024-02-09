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
          <div>
            <Nav />
            {children}
            <div className='bg-[#0D1224]'>
              <Footer />
            </div>
          </div>
        </AuthProvider>
        <Toaster position='top-center' expand={false} richColors closeButton />
      </body>
    </html>
  );
}
