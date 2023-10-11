import React from 'react';
import { SectionWrapper } from './SectionWrapper';

type EducationProps = {
  data: {
    title: string;
    education: {
      certificate: string;
      institution: string;
      institution2?: string;
      location: string;
      description: string;
    }[];
  };
};

const Education = ({ data }: EducationProps) => {
  const { title, education } = data;

  return (
    <section id='education'>
      <SectionWrapper title={title}>
        <div className='flex flex-col gap-6'>
          {education.map(
            ({
              certificate,
              institution,
              institution2,
              location,
              description,
            }) => (
              <div key={certificate} className='flex flex-col rounded-lg'>
                <div className='bg-zinc-100 p-6 shadow-md rounded'>
                  <h3 className='font-semibold uppercase text-zinc-800'>
                    {certificate}
                  </h3>
                  <h4 className='uppercase text-zinc-600 font-semibold'>
                    {institution}
                  </h4>
                  <h4 className='italic text-zinc-600 font-normal'>
                    {institution2}
                  </h4>
                  <p className='text-base text-zinc-800 font-medium'>
                    {location}
                  </p>
                  <p className='font-normal text-zinc-800'>{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Education;
