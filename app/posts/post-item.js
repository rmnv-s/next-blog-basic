'use client';
import Image from 'next/image';
import Link from 'next/link';

function PostItem({ id, image, title, subtitle, text, slug }) {
  return (
    <>
      <li className='border-2 border-red-600 border-solid cursor-pointer'>
        <Image src={image} alt={title} width={400} height={250} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{text}</p>
        <Link href={`/posts/${id}`}>На страницу поста</Link>
      </li>
    </>
  );
}

export default PostItem;
