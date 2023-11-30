import { Josefin_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

export const ToastSent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.5 }}
      className='absolute w-full h-full flex justify-center items-center m-auto'
    >
      <div className='flex justify-center items-center w-80 h-40 px-8 py-4 bg-indigo-200 border-4 border-bluesteel shadow-[0px_0px_0px_4px_rgba(199,210,254)] text-white uppercase font-medium rounded-xl mt-36'>
        <div className={josefin.className}>
          <p className='uppercase text-bluesteel text-center text-2xl '>Sent.</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ToastError = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.5 }}
      className='absolute w-full h-full flex justify-center items-center m-auto'
    >
      <div className='flex justify-center items-center w-80 h-40 px-8 py-4 bg-red-600 border-4 border-white shadow-[0px_0px_0px_4px_rgba(220,38,38)] text-white font-medium rounded-xl mt-36'>
        <div className={josefin.className}>
          <p className='text-white text-center text-2xl '>Error</p>
        </div>
      </div>
    </motion.div>
  );
};
