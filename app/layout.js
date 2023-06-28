import NavSide from './components/NavSide';
import NavTop from './components/NavTop';
import TopNavButton from './components/TopNavButton';
import './globals.css';
import { Work_Sans } from 'next/font/google';

const worksans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
});

export const metadata = {
  title: 'Max Skewes',
  description: 'Cirriculum Vitæ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={worksans.className}>
      <body>
        <header className='z-99'>
          <nav>
            <NavTop />
            <NavSide />
          </nav>
        </header>
        <main className='z-1 bg-white/[.850] w-full pl-0 md:pl-[200px] lg:pl-[300px]'>
          {children}</main>
      </body>
    </html>
  );
}
