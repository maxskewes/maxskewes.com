import React from 'react';
import AboutMe from './components/about-me';
import { aboutMe, educationData, skills, professionalData, graphicDesign, personalInfo } from '../data/data';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import Portfolio from './components/portfolio';
import GraphicDesign from './components/graphic-design';
import Personal from './components/personal';

const Page: React.FC = () => {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <Education data={educationData} />
      <ProfessionalExperience data={professionalData} />
      <Portfolio />
      <GraphicDesign data={graphicDesign} />
      <Personal data={personalInfo} />
    </div>
  );
};

export default Page;
