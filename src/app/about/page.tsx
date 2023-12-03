import NavBar from '@/components/NavBar';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto my-3 px-3'>
        <article className='rounded bg-quaternary_l1 dark:bg-secondary py-2 px-3'>
          <h1 className='text-lg mb-3'>
            Hey, it&apos;s me, your friendle developer Tomas
          </h1>
          <p className='mb-3'>
            I&apos;m glad that you came all the way to about page, means a lot.
          </p>

          <p className='mb-3'>
            So what it is about? It&apos;s Todo app. Yes. Old good Todo app. I
            figured that I better practice with simple app than bigger more
            complicated one. That one it&apos;s in progress
          </p>
          <p className='mb-3'>
            For this app I used:
            <ul className='list-inside list-disc'>
              <li>Next.js 13</li>
              <li>Tailwind</li>
              <li>Next-themes</li>
              <li>Prisma</li>
              <li>MongoDB</li>
            </ul>
          </p>

          <p className='mb-3'>
            And that&apos;s it. I learned a lot in progress. Using &apos;use
            server&apos; and &apos;use client&apos; components. Prisma looks
            very promising. Overall great experience.
          </p>

          <p>
            Created by - Tomas Jakovlevas /{' '}
            <Link
              href={'https://github.com/TomasJakovlevas'}
              target='_blank'
              className='hover:text-tertiary'
            >
              Github
            </Link>{' '}
            /{' '}
            <Link
              href={'https://www.linkedin.com/in/tomas-jakovlevas-247b2420a/'}
              target='_blank'
              className='hover:text-tertiary'
            >
              Linkedin
            </Link>{' '}
          </p>
        </article>
      </section>
    </>
  );
};

export default Page;
