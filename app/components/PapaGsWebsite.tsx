'use client';
import { useState } from 'react';
import Image from 'next/image';

const PapaGsWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className='mt-10 mb-20'>
        <div className='mb-4 flex flex-col justify-center items-center'>
          <h4 className='uppercase text-zinc-80 font-semibold text-center'>
            Secret Society Organics
          </h4>
          <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-zinc-400'>&nbsp;</p>

          <p className='font-light mx-20'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What started out a branch product website from a page on
            the main company&apos;s became a complete rebranding of the product. I was hired to design a
            new logo and expand the aesthic to the website overhaul each variety of the product&apos;s
            label.
          </p>
        </div>

        <div className='p-6 rounded overflow-hidden bg-zinc-100 shadow-md flex-col'>
          <div>
            <h3 className='font-semibold uppercase text-zinc-800 text-center'>
              Papa G&apos;s Organic Tofu
            </h3>
            <p className='font-normal text-zinc-600 text-center'>
              A product website built with Reactjs and Chakra UI. Designed and created all
              components, graphics, artwork, and layout.
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
                  priority
                  width={300}
                  height={300}
                  src={'/images/portfolio/papa-gs-link.png'}
                  alt={'RS Works App Demo'}
                  aria-label={'RS Works App Demo'}
                />
              </button>
            </div>
            <div className='flex justify-center items-center text-center'>
          <a
            target='_blank'
            href={'https://papagstofu.com/'}
            className='underline-offset-4 text-base text-zinc-800'
          >
            https://papagstofu.com/
          </a>
        </div>
          </div>
        </div>
   
      </div>
    </>
  );
};

export default PapaGsWebsite;
