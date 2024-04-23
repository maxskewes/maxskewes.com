'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdClose, MdEmail } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import useScroll from '../hooks/useScroll';
import SkipToPortfolioButtonMobile from './SkipToPortfolioButtonMobile';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

type MLinkProps = {
  to: string;
  name?: string;
  children?: any;
};

const MLink = ({ to, name, children }: MLinkProps) => {
  return (
    <Link
      href={to}
      className='ease-in-out text-white hover:text-bluesteellight py-2'
    >
      {children}
      <p className='uppercase'>{name}</p>
    </Link>
  );
};

const LinkBox = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className='flex flex-row w-full mt-2 pt-2'>
        <div className='flex flex-col w-full items-start'>
          <MLink to={'#about'} name={'About'} />
          <MLink to={'#education'} name={'Education'} />
          <MLink to={'#personal'} name={'Personal'} />
          <MLink to={'#contact'} name={'Contact'} />
        </div>
        <div className='flex flex-col w-full justify-center items-end'>
          <MLink to={'#resume-cv'} name={'Resume/CV'} />
          <MLink to={'#portfolio'} name={'Portfolios'} />
          <MLink to={'#professional-experience'} name={'Experience'} />
        </div>
      </div>
    </motion.div>
  );
};

const NavTop = () => {
  const scrollPos = useScroll();
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <div className='md:hidden'>
      {scrollPos > 1 ? (
        <div className='relative'>
          <div
            id='page-top'
            className='fixed top-0 h-auto w-full bg-zinc-800 p-4'
          >
            <div className={josefin.className}>
              <div className='flex justify-between items-start pt-1'>
                <div>
                  <p className='pt-1 text-left uppercase whitespace-nowrap text-white'>
                    Maxwell Countryman Skewes
                  </p>
                </div>

                <button
                  onClick={() => setNavOpen(!NavOpen)}
                  className='pt-1 text-white ease-in-out hover:text-bluesteellight'
                >
                  {NavOpen ? <MdClose /> : <BiMenuAltRight />}
                </button>
              </div>

              {NavOpen && <LinkBox />}
            </div>
          </div>
        </div>
      ) : (
        <div id='page-top' className='top-0 h-auto w-full bg-zinc-800 p-4'>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className={josefin.className}>
              <div className='flex justify-between items-start'>
                <div className='flex flex-col text-white pt-1'>
                  <div className='uppercase'>
                    <p className='text-left'>Maxwell</p>
                    <p className='text-left'>Countryman</p>
                    <p className='text-left'>Skewes</p>
                  </div>
                  <div>
                    <p className='font-serif text-[12px] font-light pt-2'>
                      maxskewes@gmail.com
                    </p>
                  </div>
                </div>

                <div className='flex flex-col justify-between items-center'>
                  <Image
                    priority
                    width={100}
                    height={100}
                    className='rounded-full'
                    src='/images/ugly-mug.jpg'
                    alt="Max's face"
                    aria-label="Max's face"
                  />
                </div>
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

              <div className='w-full flex justify-between'>
                <button
                  onClick={() => setNavOpen(!NavOpen)}
                  className=' text-zinc-800'
                >
                  {NavOpen ? <MdClose /> : <BiMenuAltRight />}
                </button>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='pl-6 sm:pl-0'
                >
                  <SkipToPortfolioButtonMobile />
                </motion.div>
                <button
                  onClick={() => setNavOpen(!NavOpen)}
                  className=' text-white hover:text-bluesteellight'
                >
                  {NavOpen ? <MdClose /> : <BiMenuAltRight />}
                </button>
              </div>
              {NavOpen && <LinkBox />}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NavTop;
