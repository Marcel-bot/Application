'use client';

import { createContext, ReactNode, useContext } from 'react';

interface MotionProviderInterface {}

const MotionContext = createContext<MotionProviderInterface | undefined>(
	undefined
);

export function useMotionContext() {
	return useContext(MotionContext)!;
}

export function MotionProvider({ children }: { children: ReactNode }) {
	return <MotionContext.Provider value={{}}>{children}</MotionContext.Provider>;
}
