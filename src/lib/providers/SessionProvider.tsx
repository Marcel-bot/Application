'use client';

import { createContext, ReactNode, useContext } from 'react';

interface SessionProviderInterface {}

const SessionContext = createContext<SessionProviderInterface | undefined>(
	undefined
);

export function useSessionContext() {
	return useContext(SessionContext)!;
}

export function SessionProvider({ children }: { children: ReactNode }) {
	return (
		<SessionContext.Provider value={{}}>{children}</SessionContext.Provider>
	);
}
