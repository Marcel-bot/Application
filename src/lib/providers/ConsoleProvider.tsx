'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ConsoleProviderInterface {}

const ConsoleContext = createContext<ConsoleProviderInterface | undefined>(
	undefined
);

export function useConsoleContext() {
	return useContext(ConsoleContext)!;
}

export function ConsoleProvider({ children }: { children: ReactNode }) {
	const [logs, setLogs] = useState<string>('');
	const [history, setHistory] = useState<string>('');

	return (
		<ConsoleContext.Provider value={{}}>{children}</ConsoleContext.Provider>
	);
}
