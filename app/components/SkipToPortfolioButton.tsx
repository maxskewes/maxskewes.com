import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SkipToPortfolioButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5,  delay: 1.5 }}
     
      className='pt-8'
    >
      <Link href='#portfolio' className='w-full flex justify-center'>
        <div className='opacity-80 flex justify-center items-center border border-[2px] border-bluesteel bg-bluesteel hover:bg-transparent rounded-2xl w-60 h-16 uppercase text-white hover:text-bluesteel'>
          <p className='text-lg font-semibold tracking-wide'>skip to portfolio</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default SkipToPortfolioButton;
