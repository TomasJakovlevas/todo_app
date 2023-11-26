'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';

type NavBarLinkProp = {
  title: string;
  path: string;
};

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { title: 'Todos', path: '/' },
    { title: 'New', path: '/new' },
    { title: 'About', path: '/about' },
  ];

  const activeLink = links.find((link) => link.path === pathname);

  return (
    <header className='mb-10 h-[70px] flex items-center dark:shadow-[rgba(241,_245,_249,_0.1)_0px_9px_30px] shadow-[rgba(44,54,_57,_0.1)_0px_9px_30px]'>
      <div className='flex justify-between item-center container mx-auto px-3 py-2 max-w-6xl'>
        <h1 className='text-2xl flex items-center'>{activeLink?.title}</h1>
        <div className='flex gap-[10px]'>
          <div>
            <ThemeToggler />
          </div>

          <div className='flex border border-primary dark:border-white'>
            {links.map((link) => (
              <NavBarLink key={link.path} title={link.title} path={link.path} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

const NavBarLink = ({ title, path }: NavBarLinkProp) => {
  // Hooks
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`px-2 py-1  dark:hover:bg-quaternary dark:hover:text-primary hover:bg-tertiary hover:text-white ${
        pathname === path &&
        'dark:bg-quaternary dark:text-primary bg-tertiary text-white'
      }`}
    >
      {title}
    </Link>
  );
};
