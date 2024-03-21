import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SkipToPortfolioButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='mt-6 invisible md:visible sticky right-2 top-2 w-full'
    >
      <Link href='#portfolio' className='w-full flex justify-end'>
        <div className='opacity-60 flex justify-center items-center bg-violhabbit transition ease-in-out duration-300 hover:bg-violet-300 hover:opacity-40 rounded-md w-52 h-8 uppercase text-white hover:text-violhabbit'>
          <p className='text-lg font-semibold tracking-wide'>skip to portfolio</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default SkipToPortfolioButton;
