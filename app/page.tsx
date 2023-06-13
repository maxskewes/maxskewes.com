import React from 'react';
import About from './components/about';
import {
  aboutData,
  educationData,
  skillsData,
  professionalExperienceData,
  graphicDesignData,
  personalData,
} from '../data/data';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import Portfolio from './components/portfolio';
import GraphicDesign from './components/graphic-design';
import Personal from './components/personal';
import Resume from './components/resume-cv';
import Image from 'next/image';
import Landing from './components/landing';
// import Skills from './components/skills';

const Page: React.FC = () => {
  return (
    <div>
      <div className='bg-fixed'>
        <Landing />
      </div>
      <div className='pb-8 sm:px-8 bg-white/[.850] relative'>
        <About data={aboutData} />
        {/* <Skills data={skillsData} /> */}
      </div>
      <div className='sm:px-8 bg-white/[.85] relative'>
        <Resume />
        <Education data={educationData} />
        <ProfessionalExperience data={professionalExperienceData} />
        <Portfolio />
        <GraphicDesign data={graphicDesignData} />
        <Personal data={personalData} />
      </div>
    </div>
  );
};

export default Page;
