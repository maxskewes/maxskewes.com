'use client';
import Image from 'next/image';

const BridgetownBluegrassWebsite = () => {
  return (
    <>
      <div className='mb-4 flex flex-col justify-center items-center'>
        <h4 className='uppercase text-zinc-80 font-semibold text-center'>
          Bridgetown Bluegrass Folk Festival
        </h4>
        <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-zinc-400'>&nbsp;</p>

        <p className='font-light mx-4 md:mx-20'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a Portland-based music festival occuring annually
          that my business partner and I founded and built from the ground up, beginning in 2017.
        </p>
      </div>

      <div className='p-6 rounded overflow-hidden bg-zinc-100 shadow-md flex-col'>
        <div>
          <h3 className='font-semibold uppercase text-zinc-800 text-center'>
            A Bluegrass and Folk Music Festival
          </h3>
          <p className='font-normal text-zinc-600 text-center'>
            An annual music event website built with Nextjs, Typescript, APIs, REST requests against
            IMAP and SMTP servers, Stripe commerce integration, and styled with Chakra UI. Stripe
            integration allows for direct purchase of tickets and merchandise from the website. I
            built all front and back end integration through node.js, designed and created all
            components, graphics, artwork, and layout.
          </p>
        </div>

        <div className='flex-col text-center justify-center items-center'>
          <a
            target='_blank'
            href={'https://bridgetownbluegrass-com.vercel.app/'}
            className='flex flex-col w-full'
          >
            <div className='m-4'>
              <Image
                // priority
                width={300}
                height={300}
                className='m-auto'
                src={'/images/portfolio/bridgetown-thumbnail.png'}
                alt={'Bridgetown Bluegrass development site'}
                aria-label={'Bridgetown Bluegrass development site link'}
              />
            </div>

            <div className='flex justify-center items-center text-center mb-2'>
              <i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The website is currently under production as we update
                the merchandise and roster for the 2024 event, as well as integrate Stripe for our
                commerce purposes. Follow the links below to view the production site.
              </i>
            </div>

            <div className='flex justify-center items-center text-center'>
              <i>view development website:</i>
              <p className='underline text-base text-zinc-800 mx-2'>
                https://bridgetownbluegrass-com.vercel.app/
              </p>
            </div>
          </a>
          <a target='_blank' href={'https://github.com/maxskewes/bridgetownbluegrass.com'}>
            <div className='flex justify-center items-center text-center'>
              <i>source code:</i>
              <p className='underline text-base text-zinc-800 mx-2'>
                github.com/maxskewes/bridgetownbluegrass.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default BridgetownBluegrassWebsite;
