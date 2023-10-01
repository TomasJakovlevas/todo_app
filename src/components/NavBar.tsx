'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavBarProp = {
  title: string;
};

type NavBarLinkProp = {
  title: string;
  path: string;
};

const NavBar = ({ title }: NavBarProp) => {
  return (
    <header className='mb-4 border-b border-quaternary '>
      <div className='flex justify-between item-center container mx-auto px-3 py-2 max-w-6xl'>
        <h1 className='text-2xl'>{title}</h1>
        <div className='flex border'>
          <NavBarLink title='Todos' path='/' />
          <NavBarLink title='New' path='/new' />
          <NavBarLink title='About' path='/about' />
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
      className={`px-2 py-1  hover:bg-quaternary ${
        pathname === path && 'bg-quaternary text-primary'
      }`}
    >
      {title}
    </Link>
  );
};
