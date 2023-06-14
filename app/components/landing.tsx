import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className='invisible md:visible'>
    <Image
      src='/images/dev-banjo-porch.jpg'
      alt='Max on porch coding and playing banjo'
      aria-label='Max on porch coding and playing banjo'
      width={0}
      height={0}
      sizes='100%'
      style={{ width: 'auto', height: '100%', position: 'fixed', objectFit: 'cover'}}
    />
    </div>
  );
};

export default Landing;
