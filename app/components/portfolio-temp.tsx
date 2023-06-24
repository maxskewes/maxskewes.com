import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

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

const PortfolioTemp = ({ data }: PortfolioProps) => {
  const { title, cardInfo } = data;

  return (
    <section id='portfolio'>
      <SectionHeader title={title} />
      <div className='grid lg:grid-cols-2 gap-4 auto-rows-max'>
        {cardInfo.map(
          ({ cardTitle, org, link, description, imgSrc, imgAlt }) => (
            <div
              key={cardTitle}
              className='p-6 rounded overflow-hidden bg-grey-light drop-shadow-md'
            >
              <h4>{cardTitle}</h4>
              <p className='mt-2'>{org}</p>
              <p className='mt-2'>{link}</p>
              <p className='mt-2'>{description}</p>
              <div className='flex-col text-center'>
                <div className='flex justify-center items-center'>
                <Link href={link}>
                  <Image
                    style={{ border: '5px solid white' }}
                    priority
                    width={200}
                    height={200}
                    className='m-1'
                    src={imgSrc}
                    alt={imgAlt}
                    aria-label={imgAlt}
                  />
                </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default PortfolioTemp;
