import './globals.css';
import { Josefin_Sans, Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Sidebar from './components/Sidebar';
import { contact } from '../data/contact-data';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

const worksans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
});

export const metadata = {
  title: 'Max Skewes',
  description: 'Cirriculum Vitæ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={worksans.className}>
      <body className='flex flex-col sm:flex-row'>
        <div className='grow:0 '>
          <Sidebar data={contact} />
        </div>
        <main className='grow-1 p-0 sm:p-0 sm:basis-3/4 ml-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
