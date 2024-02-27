import "./globals.css";
import { Toaster } from "sonner";
import { Nav } from "@/Components/Nav";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import SideBar from "@/Components/(frontend)/SideBar";
import { getData } from "@/utils/getData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "login with | credentials",
  description: "Created by Kisakye Moses using Nextjs 14.04",
};

export default async function RootLayout({ children }) {
  const courses = await getData("category");
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <div>
            <Nav courses={courses} />
            <div className='bg-gradient-to-t to-[#0D1224] from-[#12192f] min-h-screen'>
              {children}
            </div>
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
