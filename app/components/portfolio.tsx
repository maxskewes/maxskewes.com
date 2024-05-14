import React from 'react';
import RSWvideo from './RSWvideo';
import PapaGsWebsite from './PapaGsWebsite';
import CTI from './CTI';
import { SectionWrapper } from './SectionWrapper';
import BridgetownBluegrassWebsite from './BridgetownBluegrassWebsite';
import BBFF25 from './BBFF25';

type PortfolioProps = {
  data: {
    title: string;
    cardInfo: {
      cardTitle: string;
      org: string;
      link: string;
      description: string;
      imgSrc: string;
      imgAlt: string;
    }[];
  };
};

const Portfolio = ({ data }: PortfolioProps) => {
  const { title } = data;

  return (
    <section id='portfolio'>
      <SectionWrapper title={title}>
        <div className='grid gap-4 auto-rows-max'>
          <div className='mt-2 md:mt-10 mb-20'>
            <BBFF25 />
          </div>
          <div className='mt-2 md:mt-10 mb-20'>
            <RSWvideo />
          </div>
          <div className='mt-2 md:mt-10 mb-20'>
            <PapaGsWebsite />
          </div>
          <div className='mt-2 md:mt-10 mb-20'>
            <BridgetownBluegrassWebsite />
          </div>
          <div className='mt-2 md:mt-10 mb-20'>
            <CTI />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Portfolio;
