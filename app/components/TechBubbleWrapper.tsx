import React from 'react';

const TechBubbleWrapper = ({ children }) => {
  return (
    <div className='flex flex-col justify-center p-2 mb-4'>
      <i className='text-zinc-600 text-center m-1'>Technologies Used:</i>
      <div className='flex flex-wrap justify-center items-center min-h-[30px]'>{children}</div>
    </div>
  );
};

export default TechBubbleWrapper;
