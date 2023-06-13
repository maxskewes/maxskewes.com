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
    <div className={josefin.className}>
      <h1 className='uppercase mb-2 pt-12 font-semibold text-teal'>{title}</h1>
      <span className='pr-6 pb-6 border-t-4 border-violet'>
        &nbsp;
      </span>
 
    </div>
  );
};

export default SectionHeader;
