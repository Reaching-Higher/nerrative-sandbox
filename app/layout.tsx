import { Share_Tech } from 'next/font/google';
import localFont from 'next/font/local';

import { AppProvider } from './_context/app.context';

import './globals.scss'

const mbfPrime = localFont({
  src: '/fonts/MBF_Prime.otf',
  display: 'swap',
  variable: '--font-display',
});

const shareTech = localFont({
  src: './_fonts/ShareTech.ttf',
  display: 'swap',
  variable: '--font-body',
});

const rajdhani = localFont({
  src: './_fonts/Rajdhani.ttf',
  display: 'swap',
  variable: '--font-body_alt',
});

// const shareTech = Share_Tech({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',  
//   variable: '--font-body',
// });

import './globals.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <AppProvider>
      <html lang="en" className={`${mbfPrime.variable} ${shareTech.variable} ${rajdhani.variable}`}>
        <body className="relative h-screen dark">
          <main className="z-10 h-full layout flex flex-col gap-[100px]">{children}</main>
          <div className="z-[-1] fixed inset-0 h-full">
            <div className="h-full w-full absolute bg-[purple] opacity-[.1]" />
            <img
              className="absolute h-full w-full inset-0 opacity-[.35] object-cover"
              src="/backgrounds/glass-overlay__16-9.svg"
              alt="bg image"
            />
            <img
              className="absolute h-full w-full inset-0 z-[-2]"
              src="/backgrounds/nebula-bg.png"
              alt="bg image"
            />
          </div>
        </body>
      </html>
    </AppProvider>
  );
}
