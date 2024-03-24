import { NavBar, MyFooter } from '@/components/frame';
export default function NotFound() {
  return (
    <>
    <body className='default'>
      <NavBar />
      <div className="flex justify-center pt-20 text-5xl font-bold">Erreur 404:</div>
      <div className="flex justify-center pt-5">La ressource demandée n&apos;existe pas</div>
      <MyFooter />
    </body>
    </>
  );
}