'use client';
import React from 'react';
import { motion } from 'framer-motion';
import About from './components/about';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import Portfolio from './components/portfolio';
import GraphicDesign from './components/graphic-design';
import Personal from './components/personal';
import Resume from './components/resume-cv';
import Contact from './components/contact';
import useScroll from './hooks/useScroll';
import {
  aboutData,
  educationData,
  professionalExperienceData,
  graphicDesignData,
  personalData,
  portfolioData,
} from '../data/data';

const Page: React.FC = () => {
  const scrollPos = useScroll();

  return (
    <div className='z-1 bg-white/[.850] w-full pl-0 md:pl-[200px] lg:pl-[300px]'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className='px-4 lg:px-8'
      >
        <About data={aboutData} />
        <Resume />
        <ProfessionalExperience data={professionalExperienceData} />
        <Education data={educationData} />
        <Portfolio data={portfolioData} />
        <GraphicDesign data={graphicDesignData} />
        <Personal data={personalData} />
        <Contact />
        <div className='w-full pt-12 sm:pt-18 md:pt-20 pb-2'>
          <div className='flex justify-center items-end'>
            <p className='text-teal font-light opacity-50'>
              maxskewes@gmail.com
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
