'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SkipToPortfolioButton from './components/SkipToPortfolioButton';
import About from './components/about';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import Portfolio from './components/portfolio';
import GraphicDesign from './components/graphic-design';
import Personal from './components/personal';
import Resume from './components/resume-cv';
import Contact from './components/contact';
import {
  aboutData,
  educationData,
  professionalExperienceData,
  graphicDesignData,
  personalData,
  portfolioData,
} from '../data/data';
import Skills from './components/Skills';

const Page: React.FC = () => {
  return (
    <div className='z-1 bg-white/[.850] w-full pl-0 md:pl-[200px] lg:pl-[300px]'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className='px-4 lg:px-8'
      >
        <SkipToPortfolioButton />
        <About data={aboutData} />
        <Skills />
        <Portfolio data={portfolioData} />
        <GraphicDesign data={graphicDesignData} />
        <Resume />
        <ProfessionalExperience data={professionalExperienceData} />
        <Education data={educationData} />
        <Personal data={personalData} />
        <Contact />
        <div className='w-full pt-12 sm:pt-18 md:pt-20 pb-2'>
          <div className='flex justify-center items-end'>
            <p className='text-bluesteel font-light opacity-50'>maxskewes@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
