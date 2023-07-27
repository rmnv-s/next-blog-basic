import PostItem from './post-item';
import postsData from '../utils/postsData';
const topPosts = postsData.filter((post) => post.top === true);

function GridPosts({ posts }) {
  return (
    <>
      <div className='p-5'>
        <ul>
          {topPosts.map((post) => (
            <PostItem
              key={post.slug}
              id={post.id}
              image={post.image}
              title={post.title}
              subtitle={post.subtitle}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default GridPosts;
