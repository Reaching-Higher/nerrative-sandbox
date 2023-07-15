import { Share_Tech } from 'next/font/google';
import localFont from 'next/font/local';

const mbfPrime = localFont({
  src: '../public/fonts/MBF_Prime.otf',
  display: 'swap',
  variable: '--font-display',
});

const shareTech = Share_Tech({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-body',
});

import './globals.scss';

export const metadata = {
  title: 'Nerrative - Write your story as you live it!',
  description: 'Professional development built for the unorthodox.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mbfPrime.variable} ${shareTech.variable}`}>
      <body className="relative h-screen">
        <main className="layout z-10 h-full">{children}</main>
        <div className="z-[-1] fixed inset-0 h-full">
          <div className="h-full w-full absolute bg-[purple] opacity-[.1]" />
          <img
            className="absolute h-full w-full inset-0 opacity-[.35] object-cover"
            src="/backgrounds/glass-overlay__16-9.svg"
            alt="bg image"
          />
          {/* <img
            className="absolute h-full top-0 right-0 z-[-1]"
            src="/backgrounds/hero-bg.png"
            alt="cyberpunk girl in a futuristic city"
          /> */}
          <img
            className="absolute h-full w-full inset-0 z-[-2]"
            src="/backgrounds/nebula-bg.png"
            alt="bg image"
          />
        </div>
      </body>
    </html>
  );
}
