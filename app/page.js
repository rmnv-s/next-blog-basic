import Image from 'next/image';
import AboutAutor from './components/home-page/about';
import FeaturedPosts from './components/home-page/featured-posts';

export default function Home() {
  return (
    <>
      <AboutAutor />
      <FeaturedPosts />
    </>
  );
}
