import '/app/globals.css'
import Link from 'next/link'
import { NavBarMenu } from "@/components/frame";
export default function Menu() {
  return (
    <>
    <body className='font-josefin'>
      <NavBarMenu />
      <div className='navBarMenu'>
        <Link href='/horaires' className='menuLink text-2xl'>Nos horaires</Link><hr />
        <Link href='/reserver' className='menuLink text-2xl'>Reserver</Link><hr />
        <Link href='/contact' className='menuLink text-2xl'>Nous contacter</Link><hr />
        <Link href='/reseaux' className='menuLink text-2xl'>Nos reseaux</Link><hr />
      </div>
      <footer className='menuFooter'></footer>
      </body>
    </>
  );
}