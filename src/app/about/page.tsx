import NavBar from '@/components/NavBar';

const Page = () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto px-3 py-2 rounded bg-quaternary_l1 dark:bg-secondary'>
        <h1 className='text-lg mb-2'>Dear reader,</h1>
        <p className='mb-1'>
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
      </section>
    </>
  );
};

export default Page;
