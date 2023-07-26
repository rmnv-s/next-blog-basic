export default function Page({ params }) {
  return (
    <>
      <h1>This post for {params.slug}</h1>
      <div>Welcome: {params.slug}</div>
    </>
  );
}
