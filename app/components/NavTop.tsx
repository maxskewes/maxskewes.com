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

type MLinkProps = {
  to: string;
  name?: string;
  children?: any;
};


// height: 'size',
// width: 'size',
// display: 'flex',
// justifySelf: 'center',
// alignSelf: 'center',


const MLink = ({ to, name, children }: MLinkProps) => {
  return (
    <Link href={to} className='text-white hover:text-violet'>
      {children}
      {name}
    </Link>
  );
};

const NavTop = ({ data }: FixedSidebarProps) => {
  const { contactLinks } = data;




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
              <MLink to={'https://github.com/maxskewes'}>
                <BsGithub size='1.5rem' />
              </MLink>
              <MLink to={'https://www.linkedin.com/in/maxskewes/'}>
                <BsLinkedin size='1.5rem' />
              </MLink>
              <MLink to={'/'}>
                <MdEmail size='1.5rem' />
              </MLink>
            </div>
          </div>
        </div>
        <div className='w-full'>
        <div className='flex flex-col grow justify-center items-center'>
        <div className='uppercase flex flex-row gap-2 items-around grow'>
          <MLink to={'#resume-cv'}>Resume/CV</MLink>

          <MLink to={'#portfolio'}>App/Website Portfolio</MLink>

          <MLink to={'#graphic-design'}>Design Portfolio</MLink>
        </div>

        <div className='uppercase flex flex-row gap-2 grow'>
          <MLink to={'#education'}>Education</MLink>

          <MLink to={'#personal'}>Personal</MLink>

          <MLink to={'/contact'}>Contact</MLink>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
