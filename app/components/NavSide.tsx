import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BsPersonLinesFill, BsPersonHeart, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiCheckboxBlankFill } from 'react-icons/ri';


const josefin = Josefin_Sans({
  subsets: ['latin'],
  // weight: ['400', '700'],
  variable: '--font-josefin',
});

type NavSideProps = {
  data: {
    contactLinks: string[];
  };
};

type MSIconLinkProps = {
  to: string;
  children: any;
};

type MSlinkProps = {
  to: string;
  children: any;
};

const NavSide = ({ data }: NavSideProps) => {
  const { contactLinks } = data;

  const MSIconLink = ({ to, children }: MSlinkProps) => {
    return (
      <Link className='flex flex-row text-white hover:text-violet' href={to}>
        {children}
      </Link>
    );
  };

  const MSlink = ({ to, children }: MSlinkProps) => {
    return (
      <Link className='flex flex-row text-grey hover:text-teal' href={to} >
        {children}
      </Link>
    );
  };

  const NavMenu = () => {
    return (
      <div className='flex flex-col gap-2 my-4'>

        <MSlink to={'#about'}>
          <BsPersonLinesFill size='1.35em' />
          <h4 className='ml-3'>About</h4>
        </MSlink>

        <MSlink to={'#resume-cv'}>
          <RiCheckboxBlankFill size='1.35em' />
          <h4 className='ml-3'>Resume/CV</h4>
        </MSlink>

        <MSlink to={'#education'}>
          <RiCheckboxBlankFill size='1.35em' />
          <h4 className='ml-3'>Education</h4>
        </MSlink>

        <MSlink to={'#portfolio'}>
          <RiCheckboxBlankFill size='1.35em' />
          <h4 className='ml-3'>App and Website Portfolio</h4>
        </MSlink>

        <MSlink to={'#graphic-design'}>
          <RiCheckboxBlankFill size='1.35em' />
          <h4 className='ml-3'>Design Portfolio</h4>
        </MSlink>

        <MSlink to={'#personal'}>
          <BsPersonHeart size='1.35em' />
          <h4 className='ml-3 '>Personal</h4>
        </MSlink>

        <MSlink to={'/contact'}>
          <MdEmail size='1.35em' />
          <h4 className='ml-3'>Contact</h4>
        </MSlink>
      </div>
    );
  };

  return (
    <div className='hidden md:block h-[200px] md:h-screen w-full md:w-[200px] lg:w-[300px] bg-greydk fixed md:fixed top-0'>
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
              <MSIconLink to={'https://github.com/maxskewes'}>
                <BsGithub size='1.5rem' />
              </MSIconLink>
              <MSIconLink to={'https://www.linkedin.com/in/maxskewes/'}>
                <BsLinkedin size='1.5rem' />
              </MSIconLink>
              <MSIconLink to={'/'}>
                <MdEmail size='1.5rem' />
              </MSIconLink>
            </div>
          </div>

          <NavMenu />
        </div>
        <div className='w-full text-center text-white my-2'>
          <h6>maxskewes@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
