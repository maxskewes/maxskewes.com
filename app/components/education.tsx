import React from 'react';
import SectionHeader from './SectionHeader';

type EducationProps = {
  data: {
    title: string;
    education: {
      certificate: string;
      institution: string;
      location: string;
    }[];
  };
};

const Education = ({ data }: EducationProps) => {
  const { title, education } = data;

  return (
    <section>
      <SectionHeader title={'Education'} />
    
      <div className='flex flex-col gap-6'>
        {education.map(({ certificate, institution, location }) => (
          <div key={certificate} className='flex flex-col rounded-lg'>
            <div className='bg-grey-light p-6 drop-shadow-md'>
              <h3 className='font-semibold uppercase'>{certificate}</h3>
              <h3 className='uppercase'>{institution}</h3>
              <p>{location}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Education;
