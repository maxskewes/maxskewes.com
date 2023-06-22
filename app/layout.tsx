import './globals.css';
import { Work_Sans } from 'next/font/google';
import Sidebar from './components/NavSide';
import { contact } from '../data/contact-data';

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
      <body className='relative'>
        <Sidebar data={contact} />
        <main>{children}</main>
      </body>
    </html>
  );
}
