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

type SidebarProps = {
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

const Sidebar = ({ data }: SidebarProps) => {
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
      <Link className='flex flex-row text-grey hover:text-violet' href={to}>
        {children}
      </Link>
    );
  };

  const NavMenu = () => {
    return (
      <div className='flex flex-col gap-2 my-4'>
        <MSlink to={'/'}>
          <FaHome size='1.35em' />
          <h4 className='ml-3'>Home</h4>
        </MSlink>

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

        <MSlink to={'#contact'}>
          <MdEmail size='1.35em' />
          <h4 className='ml-3'>Contact</h4>
        </MSlink>
      </div>
    );
  };

  return (
    <div className={josefin.className}>
      <div className='bg-greydk flex flex-col content-between w-full h-100vh sm:h-screen sm:justify-start sm:w-1/4 sm:fixed'>
        <div className='flex flex-col p-4 md:p-6 lg:p-10 items-center w-full'>
          <Image
            style={{ border: '5px solid #a087cc' }}
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

          <div className='w-full mb-2'>
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

export default Sidebar;
