import Link from 'next/link';

function Header() {
  return (
    <>
      <div className='flex justify-between content-center p-5 text-ace-white'>
        <Link className='uppercase ' href='/'>
          AceBlog
        </Link>
        <nav className=''>
          <ul className='flex color '>
            <li className='mr-5'>
              <Link className='hover:text-slate-50' href='posts'>
                Posts
              </Link>
            </li>
            <li>
              <Link className='hover:text-slate-50' href='contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
