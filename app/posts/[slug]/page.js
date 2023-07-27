import postsData from '../../utils/postsData';
export default function Page({ params }) {
  const item = postsData.find((item) => item.title === params.slug);
  return (
    <>
      <h1>This post for {params.slug}</h1>
      <div>Welcome: {params.slug}</div>
    </>
  );
}
