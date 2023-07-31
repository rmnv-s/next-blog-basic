import Link from 'next/link';

function Header() {
  return (
    <>
      <header className='flex justify-between content-center p-5 text-ace-white'>
        <Link className='uppercase font-bold ' href='/'>
          AceBlog
        </Link>
        <nav className=''>
          <ul className='flex color '>
            <li className='mr-5'>
              <Link className='hover:text-slate-50' href='/posts'>
                Все посты
              </Link>
            </li>
            <li>
              <Link className='hover:text-slate-50' href='/contact'>
                Предложить пост
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
