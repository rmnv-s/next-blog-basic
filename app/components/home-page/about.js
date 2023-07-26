import Image from 'next/image';
import Ace from '../../../public/Ace.jpeg';
function AboutAutor() {
  return (
    <>
      <section>
        {/* <Image src={Ace} alt='Ace'> /> */}
        <Image className='mb-5' src={Ace} alt={'alt'} />
        <h1>I'm Ace Ventura 🤪</h1>
        <p>Я автор данного блога </p>
      </section>
    </>
  );
}

export default AboutAutor;
