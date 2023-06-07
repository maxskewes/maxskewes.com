import Image from 'next/image';
import React from 'react';

import { Email, Linkedin, Github } from './icons';

type SidebarProps = {
  data: {
    education: {
      institution: string;
      location: string;
      certificate: string;
    };
    contactLinks: string[];
  };
};
const Sidebar = ({ data }: SidebarProps) => {
  const { education, contactLinks } = data;

  return (
    <div className='bg-black flex flex-col  content-between w-full h-100vh sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
      <div className='text-white flex flex-col p-10 items-center'>
        <Image
          priority
          width={200}
          height={200}
          className='rounded-full h-full mb-6'
          src='/images/avatar.jpg'
          alt="Max's face"
          aria-label="Max's face"
        />
        <h2 className='mb-8 text-white'>Maxwell Countryman Skewes</h2>
        <h2 className='mb-8'>Full-Stack Developer</h2>
        {/* <div className='flex flex-col gap-6'>
        {education.map(({ institution, location, certificate }) => (
            <div key={institution} className='flex flex-col rounded-lg'>
              <div className='bg-grey-light p-6 drop-shadow-md'>
                <h3>{institution}</h3>
                <p className='mt-2'>{location}</p>
                <p className='mt-2'>{certificate}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className='flex flex-col gap-6'>
          <div>
            <p className='mt-2'>Full-Stack Coding Certificate</p>
            <h3>University of Oregon</h3>
            <p className='mt-2'>On-site in Portland, OR</p>
          </div>

          <div>
            <h3>Associate's Degree of Liberal Arts</h3>
            <p className='mt-2'>Marylhurst University</p>
            <p className='mt-2'>Marylhurst, OR</p>
          </div>

          <div>
            <h3>Certificate of Irish Studies</h3>
            <p className='mt-2'>University College Cork</p>
            <p className='mt-2'>Cork, Ireland</p>
          </div>
        </div>

        <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
          <h3 className='mb-2'>CONTACT</h3>
          <div className='flex flex-row justify-center gap-2'>
            <a className='icons-contactme' href={contactLinks?.[0]} aria-label={'email link'}>
              <Email />
            </a>
            <a className='icons-contactme' href={contactLinks?.[2]} aria-label={'linkedin link'}>
              <Linkedin />
            </a>
            <a className='icons-contactme' href={contactLinks?.[2]} aria-label={'github link'}>
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
