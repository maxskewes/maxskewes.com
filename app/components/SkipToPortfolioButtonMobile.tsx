import React from 'react';
import Link from 'next/link';

const SkipToPortfolioButtonMobile = () => {
  return (
    <Link href='#portfolio' className='w-full flex justify-end'>
      <div className='pt-1 flex justify-center items-center rounded-xl transition ease-in-out w-36 sm:w-44 uppercase bg-gray-400 text-zinc-800 hover:bg-bluesteellight hover:text-zinc-800'>
        <p className='text-[12px] sm:text-[14px] font-semibold tracking-wide whitespace-nowrap'>
          skip to portfolio
        </p>
      </div>
    </Link>
  );
};

export default SkipToPortfolioButtonMobile;
