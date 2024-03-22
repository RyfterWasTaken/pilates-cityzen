import type { Metadata } from "next";
import { NavBar, MyFooter } from "@/components/frame";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pilates CityZen",
  description: "Pilates CityZen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='default'>
        <NavBar />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
