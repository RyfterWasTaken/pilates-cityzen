import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pilates CityZen",
  description: "Pilates CityZen, Made by Antoine SALAUN",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
