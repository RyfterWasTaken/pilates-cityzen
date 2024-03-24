import { NavBar, MyFooter } from "@/components/frame";
import "../globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className='default'>
        <NavBar />
        {children}
        <MyFooter />
      </body>
  );
}
