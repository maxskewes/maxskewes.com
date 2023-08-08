'use client';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';

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
      <div className='p-6 rounded overflow-hidden bg-grey-light shadow-md'>
        <h3 className='font-semibold uppercase text-slate'>Resume Building App</h3>
        <h4 className='uppercase text-grey font-semibold'>RS Works</h4>

        <p className='mt-2 font-normal text-slate'>
          An app built for employees of a resume-building agency to aid with the development of
          highly personalized job-seeker documents; eg resumes, cover letters, on-line presence
          development.
        </p>
        <div className='flex-col text-center'>
          <div className='flex justify-center items-center'>
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
                className='m-1'
                src={'/images/portfolio/rs-video.png'}
                alt={'RS Works App Demo'}
                aria-label={'RS Works App Demo'}
              />
            </button>
          </div>
          {/* <Link href={'https://resumescripter.com/'}> */}
          <p className='text-base text-grey font-normal'>https://resumescripter.com/</p>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default RSWvideo;
