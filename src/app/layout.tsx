import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import '@/lib/fontawesome/css/fa.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/skeleton/navbar';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Marcel',
  description: 'Marcel app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${plusJakartaSans.className} flex h-screen w-screen bg-background dark`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
