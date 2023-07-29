import PostItem from './post-item';

function GridPosts({ posts }) {
  return (
    <>
      <div className='p-5 flex '>
        <ul className='flex justify-center gap-4 container flex-wrap'>
          {posts.map((post) => (
            <PostItem
              key={post.slug}
              id={post.id}
              image={post.image}
              title={post.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default GridPosts;
