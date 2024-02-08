import "./globals.css";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "login with | credentials",
  description: "Created by Collinz Dev || Kisakya",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
      <Toaster position='top-center' reverseOrder={false} />
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
        <Toaster position='top-center' expand={false} richColors closeButton />
      </body>
    </html>
  );
}
