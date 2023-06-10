import { useId } from 'react';
import type { SkillsProps } from './skills';
import Skills from './skills';
import SectionHeader from './SectionHeader';

type AboutMeProps = {
  data: {
    title: string;
    body: string;
    bullets: string[];
  };
  skills: SkillsProps['data'];
};

const AboutMe = ({ data, skills }: AboutMeProps) => {
  const { body, bullets } = data;
  const id = useId();
  return (
    <section>
      <SectionHeader title={'Introduction'} />
      <div className='ml-4'>
        <div>
          <p className='mb-6'>{body}</p>
        </div>
        <div>
          <p className='mb-2'>Examples of my work:</p>
          {bullets?.map((el, i) => (
            <p key={`${id}_${i}`} className='mb-2 ml-4'>
              {el}
            </p>
          ))}
        </div>
        {/* <Skills data={skills} /> */}
      </div>
    </section>
  );
};

export default AboutMe;
