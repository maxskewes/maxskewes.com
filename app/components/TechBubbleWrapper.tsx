import React from 'react';

const TechBubbleWrapper = ({ children }) => {
  return (
    <div className='flex flex-col justify-center text-center p-2 mb-4'>
      <p className='italic text-md font-light text-bluesteel pb-1'>Technologies Used:</p>
      <div className='flex flex-wrap justify-center items-center min-h-[30px]'>{children}</div>
    </div>
  );
};

export default TechBubbleWrapper;
