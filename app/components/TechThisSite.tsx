import React from 'react';
import TechBubble from './TechBubble';

const TechThisSite = () => {
  return (
    <div className='pt-2 flex flex-col justify-center text-center'>
      <p className='italic text-md font-light text-bluesteel'>
        Technologies used in the building of this website:
      </p>
      <div className='flex flex-wrap justify-center items-center min-h-[30px]'>
        <TechBubble tech={'typescript'} />
        <TechBubble tech={'REST API'} />
        <TechBubble tech={'single-page app'} />
        <TechBubble tech={'framer-motion'} />
        <TechBubble tech={'nodejs'} />
        <TechBubble tech={'reactjs'} />
        <TechBubble tech={'nextjs 13'} />
        <TechBubble tech={'tailwind'} />
      </div>
    </div>
  );
};

export default TechThisSite;
