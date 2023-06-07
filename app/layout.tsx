import './globals.css'
import {Josefin_Sans} from '@next/font/google'

import Sidebar from "./components/Sidebar";
import { personalData } from "../data/data";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	// weight: ['400', '700'],
	// variable:"--font-josefin"
})


export const metadata = {
  title: 'Max Skewes',
  description: 'Cirriculum Vitæ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        
      <main className='flex flex-col sm:flex-row'>
      <Sidebar data={personalData} />
      <main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto'>

        
        {children}
        </main>
        </main>
        
        
        </body>
    </html>
  )
}
