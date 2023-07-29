import GridPosts from './grid-post';
import postsData from '../utils/postsData';

function AllPostsPage() {
  return (
    <>
      <section className='p-5'>
        <h1>Страница всех постов</h1>
        <GridPosts posts={postsData} />
      </section>
    </>
  );
}

export default AllPostsPage;
