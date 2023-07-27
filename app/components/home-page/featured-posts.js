import GridPosts from '../../posts/grid-post';
import postsData from '../../utils/postsData';
function FeaturedPosts() {
  return (
    <>
      <section className='mt-10'>
        <h2 className='text-center text-3xl text-ace-white uppercase'>
          Лучшие посты
        </h2>
        <span className='text-center block'>по мнению Ace Ventura</span>
        <GridPosts posts={postsData} />
      </section>
    </>
  );
}

export default FeaturedPosts;
