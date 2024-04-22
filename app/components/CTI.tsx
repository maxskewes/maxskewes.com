'use client';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import TechBubble from './TechBubble';
import TechBubbleWrapper from './TechBubbleWrapper';

const CTI = () => {
  return (
    <>
      <div className='mb-4 flex flex-col justify-center items-center'>
        <h4 className='uppercase text-zinc-80 font-semibold text-center'>
          Hack for LA
        </h4>
        <p className='text-[.5rem] pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit'>
          &nbsp;
        </p>

        <TechBubbleWrapper>
          <TechBubble tech={'cra'} />
          <TechBubble tech={'react'} />
          <TechBubble tech={'node'} />
          <TechBubble tech={'axios'} />
          <TechBubble tech={'rest api'} />
          <TechBubble tech={'MUI'} />
        </TechBubbleWrapper>

        <p className='text-justify font-light mx-4 md:mx-20'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I initially volunteered with Hack for
          LA&apos;s Civic Tech Index project during a day-log
          &ldquo;hack-a-thon&rdquo; in which I helped with some simple front-end
          responsiveness. I instantly realized the potential for enormous
          benefit that, when completed, this application could provide. I signed
          on as a regular volunteer and, over the next year and a half, was one
          of several developers who gave around ten hours a week of their time.
          I was later promoted to Lead Front-End Developer, which required a
          more organizational role as well more regular meetings with project
          managers. Unfortunately, due to an undisclosed higher-level
          organizational concern, the project was haulted weeks before a
          projected Alpha-Release and has yet to be revisited. Following the
          link below will give access to the majority of what was created and
          hopefully a decent indication of what this project, when completed,
          could accomplish.
        </p>
      </div>

      <div className='p-6 rounded overflow-hidden bg-zinc-100 shadow-md flex-col'>
        <div>
          <h3 className='font-semibold uppercase text-zinc-800 text-center'>
            Civic Tech Index
          </h3>
          <p className='font-normal text-zinc-600 text-justify sm:text-center'>
            A Hack for LA project, the CTI is a web application to connect
            willing volunteers with projects relavant to civic issues,
            world-wide. Through use of its &ldquo;Tag Generator Wizard&rdquo;,
            projects are tagged with appropriatly related topics, enabling them
            to be cataloged and easily accessed by developers and project
            leaders globally.
          </p>
        </div>

        <div className='flex-col text-center justify-center items-center'>
          <a
            target='_blank'
            href={'http://civictechindex.org/home'}
            className='flex flex-col w-full'
          >
            <div className='m-4'>
              <Image
                // priority
                width={300}
                height={300}
                className='m-auto'
                src={'/images/portfolio/cti-link.png'}
                alt={'Link to CTI - currently on hold'}
                aria-label={'Link to CTI - currently on hold'}
              />
            </div>
            <div className='flex justify-center items-center text-center'>
              <p className='mx-2'>
                Click on the image above to access the publically-hidden,
                <br />
                currently dormant website for the Civic Tech Index,
              </p>
            </div>
          </a>
          <i className='my-4'>or</i>
          <a
            target='_blank'
            href={'https://github.com/civictechindex/CTI-website-frontend'}
            className='flex flex-row justify-center w-full'
          >
            <BsGithub size='1.25rem' />
            <p className='mx-2'>
              Click here to visit the GitHub repository and view source code.
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default CTI;
