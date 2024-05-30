'use client';

import { createContext, ReactNode, useContext } from 'react';

interface ChatProviderInterface {}

const ChatContext = createContext<ChatProviderInterface | undefined>(undefined);

export function useChatContext() {
	return useContext(ChatContext)!;
}

export function ChatProvider({ children }: { children: ReactNode }) {
	return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
}
