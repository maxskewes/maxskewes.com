import { useId } from 'react';
import SectionHeader from './SectionHeader';

type AboutProps = {
  data: {
    title: string;
    body: string;
    bullets: string[];
  };
};

const About = ({ data }: AboutProps) => {
  const { body, bullets } = data;
  const id = useId();
  return (
    <section id="about" >

      <SectionHeader title={'Introduction'} />
      <div className='ml-4 pb-8'>
        <div>
          <p className='mb-6'>{body}</p>
        </div>
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
