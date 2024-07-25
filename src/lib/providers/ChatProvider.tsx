'use client';

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState
} from 'react';

interface ChatProviderInterface {
	messages: message[];
	setMessages: Dispatch<SetStateAction<message[]>>;
}

const ChatContext = createContext<ChatProviderInterface | undefined>(undefined);

export function useChatContext() {
	return useContext(ChatContext)!;
}

interface message {
	sender: boolean;
	content: string;
}

export function ChatProvider({ children }: { children: ReactNode }) {
	const [messages, setMessages] = useState<message[]>([]);

	function sendMessage(msg: string) {}

	return (
		<ChatContext.Provider
			value={{
				messages,
				setMessages
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}
