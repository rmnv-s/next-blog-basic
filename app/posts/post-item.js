'use client';
import Image from 'next/image';
import Link from 'next/link';

function PostItem({ id, image, title, subtitle, text, slug }) {
  return (
    <>
      <li className='border-2 p-4 bg-slate-200 rounded-lg flex flex-col max'>
        <Image src={image} alt={title} width={350} height={250} />
        <h3 className='text-xl mb-2 flex-1 max-w-[20rem]'>{title}</h3>
        <p className='text-base mb-4'>{subtitle}</p>
        <p>{text}</p>
        <Link className='text-blue-600' href={`/posts/${id}`}>
          Посмотреть
        </Link>
      </li>
    </>
  );
}

export default PostItem;
