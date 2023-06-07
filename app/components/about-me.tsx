import { useId } from 'react';
import type { SkillsProps } from './skills';
import Skills from './skills';

type AboutMeProps = {
  data: {
    title: string;
    body: string;
    bullets: string[];
  };
  skills: SkillsProps['data'];
};

const AboutMe = ({ data, skills }: AboutMeProps) => {
  const { title, body, bullets } = data;
  const id = useId();
  return (
    <section>
      <h2 className='mb-8'>{title}</h2>
      <div>
        <p className='mb-6'>{body}</p>
      </div>
      <div>
        <p className='mb-6'>Here are a few examples of my work:</p>
        {bullets?.map((el, i) => (
          <p key={`${id}_${i}`} className='mb-6'>
            {el}
          </p>
        ))}
      </div>
      {/* <Skills data={skills} /> */}
    </section>
  );
};

export default AboutMe;
