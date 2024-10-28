import { createContext, ReactNode, useContext } from 'react';

interface ChatContextInterface {}

const chatContext = createContext<ChatContextInterface | null>(null);

export function useChat() {
  return useContext(chatContext)!;
}

export function ChatProvider({ children }: { children: ReactNode }) {
  return <chatContext.Provider value={{}}>{children}</chatContext.Provider>;
}
