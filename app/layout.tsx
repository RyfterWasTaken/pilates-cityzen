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
  const webhook = "https://canary.discord.com/api/webhooks/1221035576010997822/8doMx9QwPJ9mpkRwKY5961v_FMLbKkGAKJiIasaNjT0wH4BbkEkzdhCjzhXt9Nlhmo34";
  const body = {
    "content": "logged entry"
  }
  await fetch(webhook,{body: JSON.stringify(body), headers:{"content-type":"application/json"}, method:"POST"});
  return (
    <html lang="en">
      {children}
    </html>
  );
}
