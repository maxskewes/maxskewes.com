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

const NavSide = () => {
  return (
    <div className='inline-block h-screen w-[200px] lg:w-[300px] bg-greydk fixed p-0'>
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

          <div className='w-full max-w-[12em] mb-2'>
            <div className='flex flex-row justify-around'>
              <Link href={'https://github.com/maxskewes'}>
                <BsGithub size='1.5rem' />
              </Link>
              <Link href={'https://www.linkedin.com/in/maxskewes/'}>
                <BsLinkedin size='1.5rem' />
              </Link>
              <Link href={'/contact'}>
                <MdEmail size='1.5rem' />
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2 my-4 z-9'>
            <Link href={'#professional-experiences'} passHref>
              Professional Experience
            </Link>

            <Link href={'#resume-cv'}>Resume/CV</Link>

            <Link href={'#education'}>Education</Link>

            <Link href={'#portfolio'}>App and Website Portfolio</Link>

            <Link href={'#graphic-design'}>
              <RiCheckboxBlankFill size='1.35em' />
              Design Portfolio
            </Link>

            <Link href={'#personal'}>
              <BsPersonHeart size='1.35em' />
              Personal
            </Link>

            <Link href={'/contact'}>
              <MdEmail size='1.35em' />
              Contact
            </Link>
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
