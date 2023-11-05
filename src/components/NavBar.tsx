'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
    <header className='mb-10 border-b border-quaternary h-[70px] flex items-center'>
      <div className='flex justify-between item-center container mx-auto px-3 py-2 max-w-6xl'>
        <h1 className='text-2xl'>{activeLink?.title}</h1>
        <div className='flex border'>
          {links.map((link) => (
            <NavBarLink key={link.path} title={link.title} path={link.path} />
          ))}
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
      className={`px-2 py-1  hover:bg-quaternary hover:text-primary ${
        pathname === path && 'bg-quaternary text-primary'
      }`}
    >
      {title}
    </Link>
  );
};
