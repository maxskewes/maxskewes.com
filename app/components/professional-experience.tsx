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
      highlights?: string[];
      skills: string;
    }[];
  };
};

const ProfessionalExperience = ({ data }: ProfessionalExperienceProps) => {
  const { title, experiences } = data;

  return (
    <section id='professional-experience'>
      <SectionHeader title={title} />
      <div className='flex flex-col gap-6'>
        {experiences.map(
          ({
            role,
            company,
            dates,
            location,
            description,
            highlights,
            skills,
          }) => (
            <div
              key={role}
              className='bg-grey-light p-6 shadow-md rounded'
            >
              <h3 className='font-semibold uppercase text-slate'>{role}</h3>
              <h4 className='uppercase text-grey font-semibold'>{company}</h4>
              <p className='text-base text-grey font-medium'>{location}</p>
              <i className='text-base text-grey font-normal'>{dates}</i>
              <p className='mt-2'>&nbsp;&nbsp;{description}</p>
              {highlights ? <p className='mt-2'>Key Highlights:</p> : null}
              <p className='pl-2'>{highlights}</p>
              <p className='mt-2'>Skills:</p>
              <p className='pl-2'>{skills}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
