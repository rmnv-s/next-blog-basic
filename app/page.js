import Image from 'next/image';
import AboutAutor from './components/home-page/about';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <AboutAutor />
    </main>
  );
}
