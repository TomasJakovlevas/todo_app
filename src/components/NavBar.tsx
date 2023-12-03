'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';
import MenuIcon from '@/icons/menu/menuIcon';
import CloseIcon from '@/icons/close/closeIcon';
import { useState } from 'react';

type Link = {
  title: string;
  path: string;
};

type NavBarLinkProp = {
  title: string;
  path: string;
};

type MobileMenuProp = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  links: Link[];
};

const NavBar = () => {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const links = [
    { title: 'Todos', path: '/' },
    { title: 'New', path: '/new' },
    { title: 'About', path: '/about' },
  ];

  const activeLink = links.find((link) => link.path === pathname);

  return (
    <nav className='mb-5 sm:mb-10 h-[50px] sm:h-[70px] flex items-center dark:shadow-[rgba(241,_245,_249,_0.1)_0px_9px_30px] shadow-[rgba(44,54,_57,_0.1)_0px_9px_30px] relative'>
      <div className='flex justify-between item-center container mx-auto px-3 py-2 max-w-6xl'>
        <h1 className='text-xl sm:text-2xl flex items-center'>
          {activeLink?.title}
        </h1>
        <div className='flex gap-[10px]'>
          <button
            className='sm:hidden flex items-center'
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            {menuIsOpen ? (
              <CloseIcon className='h-[24px] w-[24px]' />
            ) : (
              <MenuIcon className='h-[24px] w-[24px]' />
            )}
          </button>

          <MobileMenu
            show={menuIsOpen}
            setShow={() => setMenuIsOpen(false)}
            links={links}
          />

          <div className='hidden sm:block'>
            <ThemeToggler />
          </div>

          <div className='hidden sm:flex border border-primary dark:border-white '>
            {links.map((link) => (
              <NavBarLink key={link.path} title={link.title} path={link.path} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const NavBarLink = ({ title, path }: NavBarLinkProp) => {
  // Hooks
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`px-2 py-1 text-sm sm:text-base dark:hover:bg-quaternary dark:hover:text-primary hover:bg-tertiary hover:text-white ${
        pathname === path &&
        'dark:bg-quaternary dark:text-primary bg-tertiary text-white'
      }`}
    >
      {title}
    </Link>
  );
};

const MobileMenu = ({ show, setShow, links }: MobileMenuProp) => {
  // Hooks
  const pathname = usePathname();

  return (
    <>
      {show && (
        <>
          <div
            onClick={() => setShow(false)}
            className='sm:hidden absolute top-[100%] bg-white inset-x-0 h-screen bg-gray-900 dark:bg-gray-500 dark:bg-opacity-40 bg-opacity-40'
          ></div>
        </>
      )}

      <div
        className={`sm:hidden absolute top-[100%]  w-full px-2 pt-3 bg-gradient-to-l dark:from-primary dark:to-primary_2 from-quaternary to-tertiary dark:text-white text-primary duration-100 ${
          show ? 'left-0' : 'left-[100%]'
        }`}
      >
        <ul>
          {links.map((link) => (
            <li
              key={link.path}
              className={`py-2 px-2 text-right ${
                pathname === link.path &&
                'dark:bg-quaternary dark:text-primary bg-tertiary text-white'
              }`}
            >
              <Link href={link.path} className='w-full inline-block '>
                {link.title}
              </Link>
            </li>
          ))}
          <li className='py-2 px-2 flex justify-end'>
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </>
  );
};
