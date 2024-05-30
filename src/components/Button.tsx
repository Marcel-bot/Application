import { ReactNode } from 'react';

export default function Button({
	children,
	className = ''
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<button
			className={`text-base px-3 py-1.5 bg-slim-gray rounded-lg ${className}`}
		>
			{children}
		</button>
	);
}
