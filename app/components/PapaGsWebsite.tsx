'use client';
import Image from 'next/image';

const PapaGsWebsite = () => {
  return (
    <>
      <div className='mt-10 mb-20'>
        <div className='mb-4 flex flex-col justify-center items-center'>
          <h4 className='uppercase text-zinc-80 font-semibold text-center'>
            Secret Society Organics
          </h4>
          <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-zinc-400'>&nbsp;</p>

          <p className='font-light mx-20'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was hired to design and build a product website separate
            from the parent company. This led to a new logo design with the aesthic expanded to the
            website, which then required a complete redesign of each variety of the product&apos;s
            label and the Product Sales&apos; sheet for promotion and distribution.
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
            <a target='_blank' href={'https://papagstofu.com/'} className='flex flex-col w-full'>
              <div className='m-4'>
                <Image
                  // priority
                  width={300}
                  height={300}
                  className='m-auto'
                  src={'/images/portfolio/papa-gs-link.png'}
                  alt={"Papa G's Tofu site link"}
                  aria-label={"Papa G's Tofu site link"}
                />
              </div>
              <div className='flex justify-center items-center text-center'>
                <i>website:</i>
                <p className='underline text-base text-zinc-800 mx-2'>https://papagstofu.com/</p>
              </div>
            </a>
            <a target='_blank' href={'https://github.com/maxskewes/papa-gs'}>
              <div className='flex justify-center items-center text-center'>
                <i>source code:</i>
                <p className='underline text-base text-zinc-800 mx-2'>
                  github.com/maxskewes/papa-gs
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PapaGsWebsite;
