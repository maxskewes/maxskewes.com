import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail, MdCircle } from 'react-icons/md';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  // weight: ['400', '700'],
  variable: '--font-josefin',
});

type FixedSidebarProps = {
  data: {
    contactLinks: string[];
  };
};

type MSlinkProps = {
  to: string;
  children: any;
};

const NavTop = ({ data }: FixedSidebarProps) => {
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
      <Link
        className='flex flex-row text-center text-grey hover:text-teal'
        href={to}
      >
        <p
          style={{
            height: 'size',
            width: 'size',
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center',
            margin: 0,
            padding: 0,
          }}
        >
          {children}
        </p>
      </Link>
    );
  };

  const NavSpace = () => {
    return (
      <div className='flex items-center text-grey mx-4'>
        {/* <MdCircle
          size={'.5rem'}
          style={{
            height: 'size',
            width: 'size',
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center',
            margin: 0,
            padding: 0,
          }}
        /> */}
      </div>
    );
  };

  const NavMenu = () => {
    return (
      <div className='flex flex-col grow justify-center items-center'>
        <div className='uppercase flex flex-row gap-2 items-around grow'>
          <MSlink to={'#resume-cv'}>Resume/CV</MSlink>
          <NavSpace />
          <MSlink to={'#portfolio'}>App/Website Portfolio</MSlink>
          <NavSpace />
          <MSlink to={'#graphic-design'}>Design Portfolio</MSlink>
        </div>

        <div className='uppercase flex flex-row gap-2 grow'>
          <MSlink to={'#education'}>Education</MSlink>
          <NavSpace />
          <MSlink to={'#personal'}>Personal</MSlink>
          <NavSpace />
          <MSlink to={'/contact'}>Contact</MSlink>
        </div>
      </div>
    );
  };

  return (
    <div className='static h-auto w-full bg-greydk'>
      <div className={josefin.className}>
        <div className='flex px-4 pt-4 justify-between items-start'>
          <div className='flex flex-col text-white'>
            <div className='uppercase'>
              <h5 className='text-left'>Maxwell</h5>
              <h5 className='text-center'>Countryman</h5>
              <h5 className='text-right'>Skewes</h5>
            </div>
            <p>maxskewes@gmail.com</p>
          </div>

          <Image
            style={{ border: '3px solid #221a69' }}
            priority
            width={100}
            height={100}
            className='mb-4 rounded-full h-full'
            src='/images/avatar.jpg'
            alt="Max's face"
            aria-label="Max's face"
          />

          <div className='flex flex-col'>
            <div className='my-2 w-full uppercase text-center'>
              <h5 className='text-white'>User-Centric</h5>
              <h5 className='text-white'>Full-Stack Developer</h5>
            </div>
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
        </div>
        <div className='w-full'>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default NavTop;
