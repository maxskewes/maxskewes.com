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
      <h2 className='mb-4 pt-12 font-semibold'>{title}</h2>
    </div>
  );
};

export default SectionHeader;
