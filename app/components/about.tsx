import { useId } from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

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
    <motion.section id='about' className='pt-0'
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <SectionHeader title={title} />
      <div className='pb-8'>
        <p className='mb-6'>
          User-Centric React Developer with several years of experience contributing to design and
          development of interactive websites and custom applications projected to serve over
          100,000 users. Well-developed ability to collaborate with UX designers, product managers,
          and back-end developers throughout all phase of projects, facilitating the creation
          intuitive, building modern apps and websites for companies across sectors including legal
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
    </motion.section>
  );
};

export default About;
