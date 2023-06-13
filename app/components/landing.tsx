import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className='bg-fixed invisible md:visible'>
    <Image
      src='/images/dev-banjo-porch.jpg'
      alt='Max on porch coding and playing banjo'
      aria-label='Max on porch coding and playing banjo'
      width={0}
      height={0}
      sizes='100%'
      style={{ width: '80%', height: 'auto', position: 'fixed' }}
    />
    </div>
  );
};

export default Landing;
