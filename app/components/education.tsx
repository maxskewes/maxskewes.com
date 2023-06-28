import React from 'react';
import SectionHeader from './SectionHeader';

type EducationProps = {
  data: {
    title: string;
    education: {
      certificate: string;
      institution: string;
      location: string;
      description: string;
    }[];
  };
};

const Education = ({ data }: EducationProps) => {
  const { title, education } = data;

  return (
    <section id="education">
      <SectionHeader title={title} />
    
      <div className='flex flex-col gap-6'>
        {education.map(({ certificate, institution, location, description }) => (
          <div key={certificate} className='flex flex-col rounded-lg'>
            <div className='bg-grey-light p-6 shadow-md rounded'>
              <h3 className='font-semibold uppercase text-slate'>{certificate}</h3>
              <h4 className='uppercase text-grey font-semibold'>{institution}</h4>
              <p className='text-base text-grey font-medium'>{location}</p>
              <i className='mt-2 font-normal text-slate'>
                  {description}</i>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Education;
