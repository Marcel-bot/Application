'use client';

import Conversation from '@/components/Conversation';
import MessageBox from '@/components/MessageBox';
import { useChatContext } from '@/lib/providers/ChatProvider';
import Console from '@/components/Console';

export default function Home() {
	const { messages } = useChatContext();

	return (
		<main className='grow flex gap-6'>
			<div className='flex flex-col grow-[4]'>
				<div className='grow overflow-auto'>
					<Conversation messages={messages} />
				</div>
				<MessageBox />
			</div>
			<div className='flex flex-col gap-6 grow-[2]'>
				<Console className='grow basis-0' title='Gestures' />
				<Console className='grow basis-0' title='Quick actions' />
			</div>
			<div className='flex flex-col gap-6 grow-[2]'>
				<Console className='grow' title={'Camera - online'} icon={'30 fps'}>
					<img alt='test' />
				</Console>
				<div className='flex justify-between p-4 border border-white/20 rounded-lg'>
					<i className='text-2xl fa fa-microphone' />
					<i className='text-2xl fa fa-volume' />
					<i className='text-2xl fa fa-camera' />
					<i className='text-2xl fa fa-stop' />
				</div>
				<h1>STATUS: IDLE</h1>
			</div>
		</main>
	);
}
