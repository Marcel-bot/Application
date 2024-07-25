'use client';

import Conversation from '@/components/Conversation';
import Button from '@/components/Button';
import MessageBox from '@/components/MessageBox';
import AudioInput from '@/components/AudioInput';
import { useChatContext } from '@/lib/providers/ChatProvider';

export default function Chat() {
	const { messages } = useChatContext();

	return (
		<main className="grow flex gap-6">
			<div className="flex flex-col grow">
				<div className="grow overflow-auto">
					<Conversation messages={messages} />
				</div>
				<MessageBox />
			</div>
			<aside className="gap-4 flex flex-col min-w-max justify-between">
				<div className="gap-4 flex flex-col">
					<Button>Load conversation</Button>
					<Button>Delete conversation</Button>
					<Button>Save conversation</Button>
					<label>Input</label>
					<AudioInput />
					<label>Output</label>
				</div>
				<div className="gap-4 flex flex-col">
					<Button>Change language</Button>
					<Button>Change model</Button>
				</div>
			</aside>
		</main>
	);
}
