import Link from 'next/link';
import React from 'react';
import { TbArrowBigUpFilled } from 'react-icons/tb';

const TopNavButton = () => {
  return (
    <Link
      href='#page-top'
      className='sm:hidden h-10 w-10 flex justify-center align-center opacity-50 bg-bluesteel rounded-full fixed bottom-5 right-5'
    >
      <TbArrowBigUpFilled color='white' fontSize={24} className='mt-1.5' />
    </Link>
  );
};

export default TopNavButton;
