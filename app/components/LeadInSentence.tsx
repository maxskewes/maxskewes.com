import React from 'react';
import Link from 'next/link';

const LeadInSentence = () => {
  return (
    <div className='flex w-full justify-center pt-6'>
      <div className='w-full'>
        <p className='text-center text-violhabbit'>
       
            <b>
              I&apos;m a Dev, and I love it.       </b>
              <br />
              <i>
              With several years experience creating and contributing to the development and design<br/>
            and of interactive websites and custom applications,
            <br />I enjoy the problem solving and continuous learning in this ever-evolving field.<br/>
            <b>
              Fluent in Typescript, APIs, React and several Javascript languages, frameworks, and
              libraries.
              </b>
          
          </i>
        </p>
        <Link href='#portfolio' className='w-full flex justify-center'>
        <button
       
                  className='border border-[2px] border-violhabbit bg-violhabbit rounded-md px-4 w-60 uppercase mt-4'
              >
                <p className='inline-flex items-center text-sm text-white font-semibold tracking-wide'>
                  <a className='pr-1'>skip to portfolio</a>
          
                </p>
              </button>
              
              
              </Link>
      </div>
   
    </div>
  );
};

export default LeadInSentence;
