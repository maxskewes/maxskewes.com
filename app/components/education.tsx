import React from 'react';

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
      <h2 className='mb-6'>{title}</h2>
      <div className='flex flex-col gap-6'>
        {education.map(({ certificate, institution, location }) => (
          <div key={certificate} className='flex flex-col rounded-lg'>
            <div className='bg-grey-light p-6 drop-shadow-md'>
              <h3>{certificate}</h3>
              <p className='mt-2'>{institution}</p>
              <p className='mt-2'>{location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
