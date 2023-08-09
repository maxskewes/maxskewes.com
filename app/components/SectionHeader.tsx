import React from 'react';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className='pb-2'>
    <div className={josefin.className}>
      <h1 className='uppercase mb-2 pt-12 font-semibold text-bluesteel'>{title}</h1>
      <span className='pr-14 sm:pr-10 lg:pr-14 border-t-4 border-violhabbit pb-2'>
        &nbsp;
      </span>
    </div>
    </div>
  );
};

export default SectionHeader;
