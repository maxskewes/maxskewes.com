import React from 'react';
import { SectionWrapper } from './SectionWrapper';

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
      <SectionWrapper title={title}>
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
              <div key={role} className='bg-zinc-100 p-6 shadow-md rounded'>
                <h3 className='font-semibold uppercase text-zinc-800'>
                  {role}
                </h3>
                <h4 className='uppercase text-zinc-600 font-semibold'>
                  {company}
                </h4>
                <p className='text-base text-zinc-800 font-medium'>
                  {location}
                </p>
                <i className='text-base text-zinc-600 font-normal'>{dates}</i>
                <p className='mt-2 text-justify indent-4'>{description}</p>
                {highlights ? <p className='mt-2'>Key Highlights:</p> : null}
                {highlights ? (
                  <ul>
                    {highlights.map((h, i) => {
                      return (
                        <li className='indent-4' key={i}>
                          {h}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
                <p className='mt-2'>Skills:</p>
                <p className='pl-2 text-center'>{skills}</p>
              </div>
            )
          )}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProfessionalExperience;
