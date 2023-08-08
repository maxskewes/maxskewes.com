'use client';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { BsLinkedin } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const RSWvideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const StartVideo = () => {
    return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <ReactPlayer url='https://www.youtube.com/watch?v=kB7g9qxbEvc&t=81s' playing />
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
      <div className='p-6 rounded overflow-hidden bg-grey-light shadow-md flex-col'>
        <h3 className='font-semibold uppercase text-slate text-center'>
          RS Works: Resume Building Application
        </h3>
        <p className='font-normal text-grey text-center'>
          An app built for employees of a resume-building agency to aid with the development of
          highly personalized job-seeker documents; eg resumes, cover letters, on-line presence
          development, etc.
        </p>
        <h4 className='uppercase text-grey font-semibold text-center'>by Resume Scripter</h4>

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
                width={200}
                height={200}
                src={'/images/portfolio/rs-video.png'}
                alt={'RS Works App Demo'}
                aria-label={'RS Works App Demo'}
              />
            </button>
            <div>
              <p>
                Demo of the app provided by <br /> Resume Scripter founder Andrea Gerson
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <p className='font-light'>
              This is the application that I have spent the better part of the last two years
              developing. The code is proprietary, hence there is no github link to its content.
              However the above link is hopefully indicative of the depth and complexity of code
              that this app required. It is currently in use by the organization and is in beta-mode
              development phase for shopping out, with strong interest from universities, school
              systems, libraries and government agencies. We are also currently designing its
              multi-lingual potentials.
            </p>
          </div>

    
          <a
            target='_blank'
            href={
              'https://www.linkedin.com/feed/update/urn:li:activity:7094743929450856448?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7094743929450856448%29'
            }
          >
            <span className='flex justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-red-500 m-2 p-1'>
              <BsLinkedin size='1.5rem' />
              <p className='font-sm italic underline text-teallt mx-2'>
                external link to Resume Scripter's LinkedIn post in reference to my work with them
              </p>
              <HiOutlineExternalLink size='1.5rem' />
            </span>
          </a>


          <Link href={'https://resumescripter.com/'}>
            <p className='text-base text-grey font-normal'>https://resumescripter.com/</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RSWvideo;
