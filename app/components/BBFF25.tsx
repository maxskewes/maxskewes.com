'use client';
import Image from 'next/image';
import TechBubble from './TechBubble';
import TechBubbleWrapper from './TechBubbleWrapper';

const BBFF25 = () => {
  return (
    <>
      <div className='mb-4 flex flex-col justify-center items-center'>
        <h4 className='uppercase text-bluesteel font-semibold text-center'>
          2025 Bridgetown Music Fest
        </h4>
        <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit'>
          &nbsp;
        </p>

        <TechBubbleWrapper>
          <TechBubble tech={'nextjs'} />
          <TechBubble tech={'typescript'} />
          <TechBubble tech={'node'} />
          <TechBubble tech={'axios'} />
          <TechBubble tech={'rest api'} />
          <TechBubble tech={'stripe api'} />
          <TechBubble tech={'nodemailer'} />
          <TechBubble tech={'framer-motion'} />
          <TechBubble tech={'ypescript'} />
        </TechBubbleWrapper>

        <p className='text-justify md:text-center font-light mx-4 md:mx-20 indent-4 md:indent-0'>
          Built using Typescript, this is the new website for the 2025
          Bridgetown Bluegrass & Folk Festival, featuring REST calls to Stripe's
          ecommerce API. I built this to eliminate 3rd party ticketing companys
          with the projected savings of close to $1000 in payouts.
        </p>
      </div>

      <div className='p-6 rounded overflow-hidden bg-zinc-100 shadow-md flex-col'>
        <div>
          <h3 className='font-semibold uppercase text-zinc-800 text-center '>
            Music Festival eCommerce App and Website for 2025
          </h3>
          <div className='font-normal text-zinc-600 text-justify md:text-center indent-4 md:indent-0'>
            <p>
              An annual music event website built with Typescript, Nextjs, APIs,
              REST requests against IMAP and SMTP servers, Stripe commerce
              integration, and styled with Tailwind CSS and Framer Motion. All
              commerce is handled using Stripe's API thus elininating the need
              for any 3rd party sales involvment. All application forms housed
              on the site for vendors, performers and volunteers are handled
              using Nodemailer. I built all front and back end integration
              through node.js, designed and created all components, graphics,
              artwork, and layout.
            </p>
          </div>
        </div>

        <div className='flex-col text-center justify-center items-center'>
          <a
            target='_blank'
            href={'https://bridgetownbluegrass2025.vercel.app/'}
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

            <div className='flex flex-col md:flex-row justify-center items-center text-center'>
              <i>website:</i>
              <p className='underline text-zinc-800 mx-2'>
                bridgetownbluegrass2025.vercel.app/
              </p>
            </div>
          </a>
          <a
            target='_blank'
            href={'https://github.com/maxskewes/bridgetownbluegrass2025'}
          >
            <div className='flex flex-col md:flex-row justify-center items-center text-center pt-2 md:pt-0'>
              <i>source code:&nbsp;</i>
              <p className='underline text-zinc-800'>
                github.com/maxskewes/bridgetownbluegrass2025
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default BBFF25;
