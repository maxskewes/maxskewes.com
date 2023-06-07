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

type SidebarProps = {
  data: {
    contactLinks: string[];
  };
};

type MSlinkProps = {
  to: string;
  children: any;
};

const Sidebar = ({ data }: SidebarProps) => {
  const { contactLinks } = data;

  const MSlink = ({ to, children }: MSlinkProps) => {
    return (
      <Link className='flex flex-row text-yellow hover:text-green' href={to}>
        {children}
      </Link>
    );
  };

  const Xlinks = () => {
    return (
      <div className='flex flex-row gap-8 mb-8'>
        <MSlink to={'/'}>
          <BsGithub size='1.75rem' />
        </MSlink>
        <Link href={'/'}>
          <BsLinkedin size='1.75rem' />
        </Link>
        <Link href={'/'}>
          <MdEmail size='1.75rem' />
        </Link>
      </div>
    );
  };

  const NavMenu = () => {
    return (
      <>
        <MSlink to={'/'}>
            <FaHome size='1.35em' />
            <h4 className='ml-3'>Home</h4>
        </MSlink>
        <Link href={'/'}>
          <div className='flex flex-row text-grey'>
            <BsPersonLinesFill size='1.35em' />
            <h4 className='ml-3'>About</h4>
          </div>
        </Link>

        <Link href={'/'}>
          <div className='flex flex-row text-grey'>
            <RiCheckboxBlankFill size='1.35em' />
            <h4 className='ml-3'>App and Website Portfolio</h4>
          </div>
        </Link>

        <Link href={'/'}>
          <div className='flex flex-row text-grey'>
            <RiCheckboxBlankFill size='1.35em' />
            <h4 className='ml-3'>Design Portfolio</h4>
          </div>
        </Link>

        <Link href={'/'}>
          <div className='flex flex-row text-grey'>
            <BsPersonHeart size='1.35em' />
            <h4 className='ml-3 '>Personal</h4>
          </div>
        </Link>
        <Link href={'/'}>
          <div className='flex flex-row text-grey'>
            <MdEmail size='1.35em' />
            <h4 className='ml-3'>Contact</h4>
          </div>
        </Link>
      </>
    );
  };

  return (
    <div className='bg-black flex flex-col content-between w-full h-100vh sm:h-screen sm:justify-start sm:w-1/5 lg:w-1/4 sm:fixed'>
      <div className='text-white flex flex-col p-10 items-center w-full'>
        <Image
          style={{ border: '5px solid purple' }}
          priority
          width={200}
          height={200}
          className='mb-4 rounded-full h-full'
          src='/images/avatar.jpg'
          alt="Max's face"
          aria-label="Max's face"
        />

        <div className='uppercase text-white'>
          <h1 className='text-left'>Maxwell</h1>
          <h1 className='text-center text-white'>Countryman</h1>
          <h1 className='text-right'>Skewes</h1>
        </div>

        <div className='mb-2 w-full uppercase text-white text-center'>
          <h3>User-Centric</h3>
          <h3>Full-Stack Developer</h3>
        </div>

        <div>
          <Xlinks />
        </div>

        <div className='flex flex-col gap-2'>
          <NavMenu />
        </div>
      </div>
      <div className='w-full text-center text-white mb-4'>
        <h6>maxskewes@gmail.com</h6>
      </div>
    </div>
  );
};

export default Sidebar;
