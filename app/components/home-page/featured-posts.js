import GridPosts from '../../posts/grid-post';
import postsData from '../../utils/postsData';
const topPosts = postsData.filter((post) => post.top === true);
function FeaturedPosts() {
  return (
    <>
      <section className='mt-10'>
        <h2 className='text-center text-3xl text-ace-white uppercase'>
          Лучшие посты
        </h2>
        <span className='text-center block'>по мнению Ace Ventura</span>
        <GridPosts posts={topPosts} />
      </section>
    </>
  );
}

export default FeaturedPosts;
