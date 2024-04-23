import { SectionWrapper } from './SectionWrapper';
import { FaMusic } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaGlobeAsia } from 'react-icons/fa';
import SkillBubbles from './SkillBubbles';

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
  return (
    <section id='about' className='pt-0'>
      <SectionWrapper title={title}>
        <div className='pb-4 text-zinc-800'>
          <p>I’m a Dev. I learn languages for a living. And I love it.</p>
          <p className='indent-8'>
            With several years of experience creating, implementing, and
            contributing to the development and design and of interactive
            websites and custom applications, I am fluent in Typescript,
            ReactJS, NextJS, API calls, and several Javascript languages, frameworks,
            and libraries. Though I have spent substantial time personally
            contracted to build apps and websites for a wide variety of products
            and causes, I truly love working on a team. I&apos;m known for my
            communication skills and enjoy collaborating with all members, from
            frontend to backend to UX/UI designers to management to client.
            Working smart and being diligent, but never afraid to reach out for
            extra eyes and input, is what leads to efficiency in the development
            environment.
          </p>
        </div>

        <div className='ml-2'>
          <div className='flex flex-row items-center'>
            <FaGlobeAsia className='text-blue-900 text-6xl -m-4 z-10' />
            <div className='p-1 pt-2 pl-4 my-3 bg-violet-50 shadow-md rounded text-zinc-800'>
              <p className='pb-2 ml-4'>
                <b className='text-bluesteel'>
                  Served as lead front-end developer{' '}
                </b>
                during the creation of a React application projected to serve
                over <b className='text-bluesteel'>100,000 users worldwide</b>,
                utilizing ReactJS with MUI framework to realize a Figma design.
              </p>
            </div>
          </div>

          <div className='flex flex-row items-center'>
            <SiTypescript className='text-blue-900 text-6xl -m-4 z-10' />
            <div className='p-1 pt-2 pl-4 my-3 bg-violet-50 shadow-md rounded text-zinc-800'>
              <p className='pb-2 ml-4'>
                <b className='text-bluesteel'>Created intuitive websites </b>for
                companies across sectors including legal services, real estate,
                entertainment, and food and beverage sectors, using{' '}
                <b className='text-bluesteel'>ReactJS</b> with{' '}
                <b className='text-bluesteel'>TypeScript</b> and frameworks
                including MUI and Chakra UI.,
              </p>
            </div>
          </div>

          <div className='flex flex-row items-center'>
            <FaMusic className='text-blue-900 text-6xl -m-4 z-10' />
            <div className='p-1 pt-2 pl-4 my-3 bg-violet-50 shadow-md rounded text-zinc-800'>
              <p className='pb-2 ml-4'>
                <b className='text-bluesteel'>Co-founded a non-profit </b>
                music festival which raised over{' '}
                <b className='text-bluesteel'>$15,000</b> for a Portland-based
                women&apos;s shelter. I managed web development and promotional
                initiatives which achieved an{' '}
                <b className='text-bluesteel'>80% annual</b> increase in
                festival revenue.
              </p>
            </div>
          </div>
        </div>
        <SkillBubbles />
      </SectionWrapper>
    </section>
  );
};

export default About;
