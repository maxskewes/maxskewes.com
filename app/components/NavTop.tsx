'use client';
import { useState } from 'react';
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdClose, MdEmail, MdCircle } from 'react-icons/md';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { BiMenuAltRight } from 'react-icons/bi';

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

const NavTop = ({ data }: NavProps) => {
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <div id='page-top' className='top-0 h-auto w-full bg-greydk p-4'>
      <div className={josefin.className}>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col text-white pt-1'>
            <div className='uppercase'>
              <p className='text-left'>Maxwell</p>
              <p className='text-left'>Countryman</p>
              <p className='text-left'>Skewes</p>
            </div>
            <div>
              <p className='font-serif text-[12px] font-thin pt-2'>
                maxskewes@gmail.com
              </p>
            </div>
          </div>

          <Image
            priority
            width={100}
            height={100}
            // fill
            // sizes='(max-width: 640px) 100px, (max-width: 768px) 120px, 50px'
            className='rounded-full'
            src='/images/ugly-mug.jpg'
            alt="Max's face"
            aria-label="Max's face"
          />
          {/* </div> */}

          <div className='flex flex-col text-white pt-1'>
            <div className='uppercase'>
              <p className='text-right'>User-Centric</p>
              <p className='text-right'>Full-Stack</p>
              <p className='text-right'>Developer</p>
            </div>
            <div className='flex flex-row justify-between m-2'>
              <MLink to={'https://github.com/maxskewes'}>
                <BsGithub size='1.25rem' />
              </MLink>
              <MLink to={'https://www.linkedin.com/in/maxskewes/'}>
                <BsLinkedin size='1.25rem' />
              </MLink>
              <MLink to={'/'}>
                <MdEmail size='1.25rem' />
              </MLink>
            </div>
          </div>
        </div>

        <button
          onClick={() => setNavOpen(!NavOpen)}
          className='flex justify-end w-full text-white hover:text-teallt'
        >
          {NavOpen ? (
            <MdClose />
          ) : (
            <BiMenuAltRight />
          )}
        </button>

        {NavOpen && (
          <div className='flex flex-col w-full'>
            <div className='flex flex-row w-full justify-around pb-2'>
              <MLink to={'#resume-cv'} name={'Resume/CV'} />
              <MLink to={'#portfolio'} name={'App/Website Portfolio'} />
              <MLink to={'#graphic-design'} name={'Design Portfolio'} />
            </div>
            <div className='flex flex-row w-full justify-around pb-2'>
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

export default NavTop;
