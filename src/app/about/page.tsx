import NavBar from '@/components/NavBar';

const Page = () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto my-3 px-3'>
        <article className='rounded bg-quaternary_l1 dark:bg-secondary py-2 px-3'>
          <h1 className='text-lg mb-3'>Dear reader,</h1>
          <p className='mb-3'>
            I made this Todo App just to get it out of my system and practice
            Next.js 13 a bit. So please don&apos;t judge too much.
          </p>
          <p>
            What I used?
            <ul className='list-inside list-disc'>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Next-themes</li>
              <li>Prisma</li>
            </ul>
          </p>
        </article>
      </section>
    </>
  );
};

export default Page;
