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
      <SectionHeader title={data.title} />
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
                <h3 className='font-semibold uppercase'>{role}</h3>
                <h4 className='uppercase'>{company}</h4>
                <h4 className='text-grey'>{location}</h4>
                <p className='italic text-grey'>{dates}</p>
                <p className='mt-2'>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
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
