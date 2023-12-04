import NavBar from '@/components/NavBar';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <NavBar />
      <section className='container max-w-6xl mx-auto my-3 px-3'>
        <article className='rounded bg-quaternary_l1 dark:bg-secondary py-2 px-3'>
          <h1 className='text-lg mb-3'>
            Hey, it&apos;s me, your friendly neighborhood developer Tomas
          </h1>
          <p className='mb-3'>
            I&apos;m glad that you came all the way to the About page, means a
            lot.
          </p>

          <p className='mb-3'>
            So what is it about? It&apos;s Todo app. Yes. Good old Todo app. I
            figured that I better practice with simple app than bigger more
            complicated one. That one is still in progress and not ready to see
            the light yet.
          </p>
          <div className='mb-3'>
            For this app I used:
            <ul className='list-inside list-disc'>
              <li>
                Next.js 13
                <p className='ml-[24px]'>
                  New built-in routing system and more{' '}
                </p>
              </li>
              <li>
                Tailwind <p className='ml-[24px]'>Flexibility and simplicity</p>
              </li>
              <li>
                Prisma
                <p className='ml-[24px]'>
                  Simplifies database interactions by providing a clean and
                  intuitive API
                </p>
              </li>
              <li>
                MongoDB{' '}
                <p className='ml-[24px]'>
                  Flexible schema makes it easy to store data
                </p>
              </li>
            </ul>
          </div>

          <p></p>

          <p className='mb-3'>
            I learned a lot in progress, and realized how much I don&apos;t
            know. It&apos;s a big world out there. And I&apos;ll continue to
            expolore it by one Todo at the time.
          </p>

          <p>
            Created by - Tomas Jakovlevas /z
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
