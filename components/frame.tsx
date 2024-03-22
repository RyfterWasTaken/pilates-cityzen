"use client"
import '/app/globals.css'
import Logo from '/public/assets/logo.svg';
import Menu from '/public/assets/menu.svg';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

export function NavBar() {
    const router = useRouter();
    const handleClickLogo = () => {
        router.push('/');
    }
    const handleClickMenu = () => {
        router.push('/menu');
    }
    const handleClickRes = () => {
        router.push('/reserver')
    }
    const handleClickHor = () => {
        router.push('/horaires')
    }
    return (
        <>
            <nav className="header">


                <Button onClick={handleClickLogo}>
                    <div className='flex gap-x-5'>
                        <Image src={Logo} alt="Logo" />
                        <div className='text-3xl'>Pilates CityZen</div>
                    </div>
                </Button>

                <div className='hidden lg:block '>
                    <div className='flex gap-x-20' >
                        <Button onClick={handleClickHor}><h2 className='text-2xl'>Horaires</h2></Button>
                        <Button onClick={handleClickRes}><h2 className='text-2xl'>Reservations</h2></Button>
                    </div>
                </div>
                <div className='lg:hidden'>
                    <Button onClick={handleClickMenu}><Image src={Menu} alt="Menu" /></Button>
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
                Adress
            </div>
        </div>
    )
}