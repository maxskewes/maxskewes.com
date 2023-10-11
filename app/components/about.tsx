import { useId } from 'react';
import SectionWrapper from './SectionWrapper';

type AboutProps = {
  data: {
    title: string;
    bullets: {
      b: string;
      p: string;
    }[];
  };
};

const About = ({ data }: AboutProps) => {
  const { title, bullets } = data;
  const id = useId();
  return (
    <section id='about' className='pt-0'>
      <SectionWrapper title={title}>
        <div className='pb-8'>
          <p className='mb-6'>
            User-Centric Javascript Developer with several years of experience
            contributing to design and development of interactive websites and
            custom applications projected to serve over 100,000 users.
            Full-Stack with focus on front-end. Fluent in several languages and
            relational database processing; specialized focus on Reactjs and
            Typescript. Well-developed ability to collaborate with UX designers,
            product managers, and back-end developers throughout all phase of
            projects, facilitating the creation intuitive, building modern apps
            and websites for companies across sectors including legal services,
            real estate, entertainment, and career services.
          </p>
          <div>
            {bullets?.map((el, i) => (
              <div className='p-1 pt-2 my-3 bg-zinc-100 shadow-md rounded text-zinc-800'>
                <p key={`${id}_${i}`} className='pb-2 ml-4'>
                  <b className='text-zinc-700'>{el.b}</b>{el.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
