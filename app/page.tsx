import React from 'react';
import About from './components/about';
import { aboutData, educationData, skillsData, professionalExperienceData, graphicDesignData, personalData } from '../data/data';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import Portfolio from './components/portfolio';
import GraphicDesign from './components/graphic-design';
import Personal from './components/personal';
import Resume from './components/resume-cv';
// import Skills from './components/skills';

const Page: React.FC = () => {
  return (
    <div>
      <About data={aboutData} />
      {/* <Skills data={skillsData} /> */}
      <Resume />
      <Education data={educationData} />
      <ProfessionalExperience data={professionalExperienceData} />
      <Portfolio />
      <GraphicDesign data={graphicDesignData} />
      <Personal data={personalData} />
    </div>
  );
};

export default Page;
