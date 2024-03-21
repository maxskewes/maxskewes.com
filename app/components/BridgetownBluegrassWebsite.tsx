'use client';
import Image from 'next/image';
import TechBubble from './TechBubble';

const BridgetownBluegrassWebsite = () => {
  return (
    <>
      <div className='mb-4 flex flex-col justify-center items-center'>
        <h4 className='uppercase text-bluesteel font-semibold text-center'>
          Bridgetown Bluegrass Folk Festival
        </h4>
        <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit'>&nbsp;</p>

        <div className='flex flex-col justify-center p-2 mb-4'>
          <i className='text-zinc-600 text-center m-1'>Technologies Used:</i>
          <div className='flex justify-center items-center min-h-[30px]'>
            <TechBubble tech={'nextjs'} />
            <TechBubble tech={'react'} />
            <TechBubble tech={'node'} />
            <TechBubble tech={'axios'} />
            <TechBubble tech={'rest api'} />
            <TechBubble tech={'stripe api'} />
            <TechBubble tech={'nodemailer'} />
            <TechBubble tech={'framer-motion'} />
            <TechBubble tech={'chakra ui'} />
          </div>
        </div>

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
            An annual music event website built with Nextjs, Tailwind CSS, APIs, REST requests
            against IMAP and SMTP servers, Stripe commerce integration, and styled with Chakra UI.
            Eventbrite integration allows external link for purchase of tickets and merchandise from
            the website. I built all front and back end integration through node.js, designed and
            created all components, graphics, artwork, and layout.
          </p>
        </div>

        <div className='flex-col text-center justify-center items-center'>
          <a
            target='_blank'
            href={'https://bridgetownbluegrass.com/'}
            className='flex flex-col w-full'
          >
            <div className='m-4'>
              <Image
                // priority
                width={300}
                height={300}
                className='m-auto'
                src={'/images/portfolio/bridgetown-site-thumbnail.png'}
                alt={'Bridgetown Bluegrass website thumbnail image'}
                aria-label={'Bridgetown Bluegrass site link'}
              />
            </div>

            <div className='flex justify-center items-center text-center'>
              <i>website:</i>
              <p className='underline text-base text-zinc-800 mx-2'>
                https://bridgetownbluegrass.com/
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
