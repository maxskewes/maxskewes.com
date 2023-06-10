import React from 'react';
import SectionHeader from './SectionHeader';

type ProfessionalExperienceProps = {
  data: {
    title: string;
    experiences: {
      role: string;
      company: string;
      dates: string;
      location: string;
      description: string;
      // highlights: string[];
      skills: string;
    }[];
  };
};

const ProfessionalExperience = ({ data }: ProfessionalExperienceProps) => {
  const { experiences } = data;

  return (
    <section>
      <SectionHeader title={'Professional Experience'} />
      <div className='flex flex-col gap-6'>
        {experiences.map(
          ({
            role,
            company,
            dates,
            location,
            description,
            // highlights,
            skills,
          }) => (
            <div key={role} className='flex flex-col rounded-lg'>
              <div className='bg-grey-light p-6 drop-shadow-md'>
                <h3>{role}</h3>
                <p className='mt-2'>{company}</p>
                <p className='mt-2'>{dates}</p>
                <p className='mt-2'>{location}</p>
                <p className='mt-2'>{description}</p>
                {/* <p className='mt-2'>Key Highlights:</p>
                <p className='mt-2'>{highlights}</p> */}
                <p className='mt-2'>Skills:</p>
                <p className='mt-2'>{skills}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
