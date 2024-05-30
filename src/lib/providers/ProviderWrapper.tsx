'use client';

import { ReactNode } from 'react';
import { SessionProvider } from '@/lib/providers/SessionProvider';
import { ConsoleProvider } from '@/lib/providers/ConsoleProvider';
import { MotionProvider } from '@/lib/providers/MotionProvider';
import { DisplayProvider } from '@/lib/providers/DisplayProvider';
import { ChatProvider } from '@/lib/providers/ChatProvider';
import { CameraProvider } from '@/lib/providers/CameraProvider';

interface props {
	children: ReactNode;
}

const providers = [
	SessionProvider,
	ConsoleProvider,
	MotionProvider,
	DisplayProvider,
	ChatProvider,
	CameraProvider
];

export default function ProviderWrapper({ children }: props) {
	return providers.reduceRight(
		(acc, Provider) => <Provider>{acc}</Provider>,
		children
	);
}
