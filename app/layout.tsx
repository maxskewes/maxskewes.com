import './globals.css';
import { Josefin_Sans } from 'next/font/google';

import Sidebar from './components/Sidebar';
import { contact } from '../data/contact-data';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  // weight: ['400', '700'],
  variable: '--font-josefin',
});

export const metadata = {
  title: 'Max Skewes',
  description: 'Cirriculum Vitæ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={josefin.className}>
      <body className='flex flex-col sm:flex-row'>
        <div className='grow:0 '>
        <Sidebar data={contact} />
        </div>
        <main className='grow-1 p-8 sm:pr-8 sm:basis-3/4 ml-auto'>{children}</main>
      </body>
    </html>
  );
}
