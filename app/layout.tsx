import BackDrop from './components/BackDrop';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={worksans.className}>
      <body>
        <header className='z-99'>
          <nav>
            <NavTop />
            <NavSide />
          </nav>
        </header>
        <main>
          <BackDrop />
          {children}
        </main>
        <TopNavButton />
      </body>
    </html>
  );
}
