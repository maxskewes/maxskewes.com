'use client';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { GiClick } from 'react-icons/gi';
import { BsLinkedin } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';

const RSWvideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const StartVideo = () => {
    return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <ReactPlayer
          url='https://resumescripter.com/hubfs/2023%20RS%20Works%20Demo.mp4'
          playing
          controls
        />
      </div>
    );
  };

  return (
    <>
      {isPlaying ? (
        <div
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          <StartVideo />
        </div>
      ) : null}

      <div className='mb-4 flex flex-col justify-center items-center'>
        <h4 className='uppercase text-bluesteel font-semibold text-center'>Resume Scripter</h4>
        <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit'>&nbsp;</p>

        <p className='font-light mx-4 md:mx-20'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the application that I have spent the better part of
          the last two years developing. The code is proprietary, hence there is no github link to
          its content. However the above link is hopefully indicative of the depth and complexity of
          code that this app required. It is currently in use by the organization and is in
          beta-mode development phase for shopping out, with strong interest from universities,
          school systems, libraries and government agencies. We are also currently developing its
          multi-lingual potentials.
        </p>
      </div>

      <div className='p-6 rounded overflow-hidden bg-zinc-100 shadow-md flex-col'>
        <div>
          <h3 className='font-semibold uppercase text-zinc-800 text-center'>
            RS Works: Resume Building Application
          </h3>
          <p className='font-normal text-zinc-600 text-center'>
            An app built for employees of a resume-building agency to aid with the development of
            highly personalized job-seeker documents; e.g. resumes, cover letters, on-line presence
            development, etc.
          </p>
        </div>

        <div className='flex-col text-center justify-center items-center'>
          <div className='m-4'>
            <button
              onClick={() => {
                setIsPlaying(true);
              }}
            >
              <Image
                style={{ border: '5px solid white' }}
                priority
                width={300}
                height={300}
                src={'/images/portfolio/rs-video.png'}
                alt={'RS Works App Demo'}
                aria-label={'RS Works App Demo'}
              />
            </button>
            <div>
              <p className='text-zinc-600'>
                Demo of the app provided by <br /> Resume Scripter founder Andrea Gerson
              </p>
            </div>
          </div>
          <i>The source code for this project is proprietary, hence unavailable.</i>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center w-full'>
        <div className='m-4 p-2 flex flex-row justify-center rounded bg-zinc-50 bg-opacity-50 opacity-80 overflow-hidden shadow-lg w-full'>
          <BsLinkedin size='1.5rem' style={{ color: '#550180' }} />
          <GiClick size='1.5rem' style={{ color: '#550180' }} />
          <a
            target='_blank'
            href={
              'https://www.linkedin.com/feed/update/urn:li:activity:7094743929450856448?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7094743929450856448%29'
            }
            className='font-md italic font-semibold text-violhabbit mx-2'
          >
            Link to Resume Scripter&apos;s LinkedIn post in reference to my work with them
          </a>
          <HiOutlineExternalLink size='1rem' style={{ color: '#550180' }} />
        </div>

        <a
          target='_blank'
          href={'https://resumescripter.com/'}
          className='underline-offset-4 text-base font-normal text-zinc-800'
        >
          https://resumescripter.com/
        </a>
      </div>
    </>
  );
};

export default RSWvideo;
