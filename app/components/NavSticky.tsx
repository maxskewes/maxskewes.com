'use client';
import { useState } from 'react';
import { Josefin_Sans } from 'next/font/google';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdClose, MdEmail, MdCircle } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import TopNavButton from './TopNavButton';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

type NavProps = {
  data: {
    contactLinks: string[];
  };
};

type MLinkProps = {
  to: string;
  name?: string;
  children?: any;
};

const MLink = ({ to, name, children }: MLinkProps) => {
  return (
    <Link href={to} className='text-white hover:text-teallt'>
      {children}
      <p>{name}</p>
    </Link>
  );
};

const NavSticky = ({ data }: NavProps) => {
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <div id='page-top' className='sticky top-0 h-auto w-full bg-greydk p-4'>
      <div className={josefin.className}>
        <div className='flex justify-between items-start pt-1'>
          <div>
            <p className='text-left uppercase whitespace-nowrap text-white'>
              Maxwell Countryman Skewes
            </p>
          </div>

          <button
            onClick={() => setNavOpen(!NavOpen)}
            className='flex justify-end w-full text-white hover:text-teallt'
          >
            {NavOpen ? <MdClose /> : <BiMenuAltRight />}
          </button>
        </div>

        {NavOpen && (
          <div className='flex flex-col w-full mt-2 pt-2'>
            <div className='flex flex-row w-full justify-around'>
              <MLink to={'#resume-cv'} name={'Resume/CV'} />
              <MLink to={'#portfolio'} name={'App/Website Portfolio'} />
              <MLink to={'#graphic-design'} name={'Design Portfolio'} />
            </div>
            <div className='flex flex-row w-full justify-around pt-2'>
              <MLink to={'#education'} name={'Education'} />
              <MLink to={'#personal'} name={'Personal'} />
              <MLink to={'/contact'} name={'Contact'} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavSticky;
