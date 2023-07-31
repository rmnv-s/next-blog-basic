import GridPosts from './grid-post';
import postsData from '../utils/postsData';

function AllPostsPage() {
  let newDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <section className='p-5'>
        <h1 className='text-xl text-ace-white'>
          Страница всех постов на {newDate}
        </h1>
        <GridPosts posts={postsData} />
      </section>
    </>
  );
}

export default AllPostsPage;
