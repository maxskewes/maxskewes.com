import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  BsPersonLinesFill,
  BsPersonHeart,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiCheckboxBlankFill } from 'react-icons/ri';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  // weight: ['400', '700'],
  variable: '--font-josefin',
});

type MLinkSmProps = {
  to: string;
  name?: string;
  children?: any;
};

const MLinkSm = ({ to, name, children }: MLinkSmProps) => {
  return (
    <Link href={to} className='text-white hover:text-violet'>
      {children}
      {name}
    </Link>
  );
};

const NavSide = () => {
  return (
    <div className='hidden md:inline-block h-screen w-[200px] lg:w-[300px] bg-greydk fixed p-0'>
      <div className={josefin.className}>
        <div className='flex flex-col align-center p-4 md:p-6 lg:px-10 items-center'>
          <Image
            style={{ border: '5px solid #221a69' }}
            priority
            width={160}
            height={160}
            className='mb-4 rounded-full h-full'
            src='/images/avatar.jpg'
            alt="Max's face"
            aria-label="Max's face"
          />

          <div className='uppercase text-white mb-2'>
            <h1 className='text-left'>Maxwell</h1>
            <h1 className='text-center'>Countryman</h1>
            <h1 className='text-right'>Skewes</h1>
          </div>

          <div className='my-2 w-full uppercase text-center'>
            <h2 className='text-white'>User-Centric</h2>
            <h2 className='text-white'>Full-Stack Developer</h2>
          </div>

          <div className='w-full max-w-[12em] m-2'>
            <div className='flex flex-row justify-around'>
              <MLinkSm to={'https://github.com/maxskewes'}>
                <BsGithub size='1.5rem' />
              </MLinkSm>
              <MLinkSm to={'https://www.linkedin.com/in/maxskewes/'}>
                <BsLinkedin size='1.5rem' />
              </MLinkSm>
              <MLinkSm to={'/contact'}>
                <MdEmail size='1.5rem' />
              </MLinkSm>
            </div>
          </div>

          <div className='flex flex-col gap-2 my-4 z-9'>
            <MLinkSm to={'#professional-experiences'}>
              Professional Experience
            </MLinkSm>

            <MLinkSm to={'#resume-cv'}>Resume/CV</MLinkSm>

            <MLinkSm to={'#education'}>Education</MLinkSm>

            <MLinkSm to={'#portfolio'}>App and Website Portfolio</MLinkSm>

            <MLinkSm to={'#graphic-design'}>Design Portfolio</MLinkSm>

            <MLinkSm to={'#personal'}>Personal</MLinkSm>

            <MLinkSm to={'/contact'}>Contact</MLinkSm>
          </div>
        </div>
        <div className='w-full text-center text-white my-2'>
          <h6>maxskewes@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
