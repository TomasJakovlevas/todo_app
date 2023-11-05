import NavBar from '@/components/NavBar';

const Page = () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto px-3'>
        <h1>Dear reader,</h1>
        <p>
          I made this Todo App just to get it out of my system and practice
          Next.js 13 a bit. So please don&apos;t judge too much.
        </p>
      </section>
    </>
  );
};

export default Page;
