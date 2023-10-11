import React from 'react';
import RSWvideo from './RSWvideo';
import PapaGsWebsite from './PapaGsWebsite';
import CTI from './CTI';
import { SectionWrapper } from './SectionWrapper';

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
          <RSWvideo />
          <PapaGsWebsite />
          <CTI />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Portfolio;
