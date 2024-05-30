'use client';

import { createContext, ReactNode, useContext } from 'react';

interface CameraProviderInterface {}

const CameraContext = createContext<CameraProviderInterface | undefined>(
	undefined
);

export function useCameraContext() {
	return useContext(CameraContext)!;
}

export function CameraProvider({ children }: { children: ReactNode }) {
	return <CameraContext.Provider value={{}}>{children}</CameraContext.Provider>;
}
