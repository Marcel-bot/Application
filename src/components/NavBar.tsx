'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs: {
	name: string;
	url: string;
}[] = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'Debug',
		url: '/debug'
	},
	{
		name: 'Camera',
		url: '/camera'
	},
	{
		name: 'Chat',
		url: '/chat'
	},
	{
		name: 'Hands',
		url: '/hands'
	},
	{
		name: 'Eyes',
		url: '/eyes'
	}
];

export default function NavBar() {
	const pathName = usePathname();

	return (
		<nav className='w-screen bg-black/60 flex justify-between py-3.5 px-[1.1rem]'>
			<img alt='Logo' />
			<div className='justify-center grow gap-12 md:flex hidden'>
				{tabs.map((tab, index) => (
					<Link
						className={`text-2xl ${tab.url === pathName ? 'font-extrabold' : ''}`}
						href={tab.url}
						key={index}
					>
						{tab.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
