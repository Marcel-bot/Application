import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import '@/lib/fontawesome/css/fa.css';
import NavBar from '@/components/NavBar';
import ProviderWrapper from '@/lib/providers/ProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'MARCEL',
	description: 'An application made to control MARCEL'
};

export default function RootLayout({
	children
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en'>
			<body
				className={`bg-black overflow-x-hidden w-screen h-screen flex flex-col ${inter.className}`}
			>
				<NavBar />
				<div className='p-6 grow flex flex-col'>
					<ProviderWrapper>{children}</ProviderWrapper>
				</div>
			</body>
		</html>
	);
}
