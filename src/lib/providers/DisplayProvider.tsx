'use client';

import { createContext, ReactNode, useContext } from 'react';

interface DisplayProviderInterface {}

const DisplayContext = createContext<DisplayProviderInterface | undefined>(
	undefined
);

export function useDisplayContext() {
	return useContext(DisplayContext)!;
}

export function DisplayProvider({ children }: { children: ReactNode }) {
	return (
		<DisplayContext.Provider value={{}}>{children}</DisplayContext.Provider>
	);
}
