import { useId } from 'react';
import SectionHeader from './SectionHeader';

type AboutProps = {
  data: {
    title: string;
    bullets: string[];
  };
};

const About = ({ data }: AboutProps) => {
  const { title, bullets } = data;
  const id = useId();
  return (
    <section id='about' className='pt-0'>
      <SectionHeader title={title} />
      <div className='pb-8'>
        <p className='mb-6'>
          I&apos;m a full-stack developer with experience in graphic design.
          I&apos;ve spent the past several years contributing to the design and
          development of interactive websites and custom applications projected
          to serve over 100,000 users. Since graduating from University of
          Oregon&apos;s Full-Stack program, I&apos;ve collaborated with UX designers,
          product managers, and other front and back-end developers throughout
          all phases of projects, facilitating the creation intuitive, building
          modern apps and websites for companies across sectors including legal
          services, real estate, entertainment, and career services.
        </p>
        <div>
          <p className='mb-2'>Examples of my work:</p>
          {bullets?.map((el, i) => (
            <p key={`${id}_${i}`} className='pb-2 ml-4'>
              {el}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
