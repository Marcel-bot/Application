import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import '@/lib/fontawesome/css/fa.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/skeleton/navbar';
import ProviderWrapper from '@/lib/providers/provider-wrapper';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Marcel',
  description: 'The app that controls the Marcel humanoid robot'
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
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
