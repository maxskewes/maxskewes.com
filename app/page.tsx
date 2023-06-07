import React from 'react';
import AboutMe from './components/about-me';
import { aboutMe, educationData, skills, professionalData, personalInfo } from '../data/data';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import Portfolio from './components/portfolio';
import Personal from './components/personal';

const Page: React.FC = () => {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <Education data={educationData} />
      <ProfessionalExperience data={professionalData} />
      <Portfolio />

      <Personal data={personalInfo}/>
    </div>
  );
};

export default Page;
