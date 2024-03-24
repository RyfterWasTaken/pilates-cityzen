"use client"
import '/app/globals.css'
import Logo from '/public/assets/logo.svg';
import Menu from '/public/assets/menu.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

export function NavBar() {
  return (
    <>
      <nav className="header">
        <Link href="/" className='flex gap-x-5 navLinkNoHov'>
          <Image src={Logo} alt="Logo" />
          <div className='text-3xl'>Pilates CityZen</div>
        </Link>
        <div className='hidden lg:block '>
          <div className='flex' >
            <Link href='/horaires' className='navLink text-2xl'>Nos horaires</Link>
            <Link href='/reserver' className='navLink text-2xl'>Reserver</Link>
            <Link href='/contact' className='navLink text-2xl'>Nous contacter</Link>
            <Link href='/reseaux' className='navLink text-2xl'>Nos reseaux</Link>
          </div>
        </div>
        <div className='lg:hidden'>
          <Link href='/menu' className='navLinkNoHov'><Image src={Menu} alt="Menu" /></Link>
        </div>
      </nav>
    </>
  )
}
export function MyFooter() {
  return (
    <div className='myfooter'>
      <div>
        Contact
      </div>
      <div>
        Addresse
      </div>
    </div>
  )
}
export function NavBarMenu() {
  const router = useRouter();
  const handleClickMenu = () => {
    router.back();
  }
  return (
    <>
      <nav className="header">
        <Link href="/" className='flex gap-x-5 navLinkNoHov'>
          <Image src={Logo} alt="Logo" />
          <div className='text-3xl'>Pilates CityZen</div>
        </Link>
        <Button onClick={handleClickMenu} className='navLinkNoHov'><Image src={Menu} alt="Menu" className='rotate90' /></Button>
      </nav>
    </>
  )
}