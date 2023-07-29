import Image from 'next/image';
import postsData from '../../utils/postsData';

export default function Page({ params }) {
  const item = postsData.find((item) => item.id === params.slug);

  return (
    <>
      <section className='p-5'>
        <h2 className='font-bold text-3xl text-center mb-5'>{item.title}</h2>
        <Image className='mb-5 w-full' src={item.image} alt={item.title} />
        <p>{item.text}</p>
      </section>
    </>
  );
}
