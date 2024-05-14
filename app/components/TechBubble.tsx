import React from 'react';

type TechBubbleProps = {
  tech: string;
};

const TechBubble = ({ tech }: TechBubbleProps) => {
  return (
    <div className='text-[10px] md:text-sm py-.5 md:py-1 px-1 md:px-3 bg-bluesteel text-white m-1 rounded-md md:rounded-full whitespace-nowrap'>
      {tech}
    </div>
  );
};

export default TechBubble;
