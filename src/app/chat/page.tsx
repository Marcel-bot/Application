import Conversation from '@/components/Conversation';
import Button from '@/components/Button';
import MessageBox from '@/components/MessageBox';
import AudioInput from '@/components/AudioInput';

const messages = [
	{
		sender: true,
		content:
			'msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol'
	},
	{
		sender: true,
		content:
			'msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol'
	},
	{
		sender: false,
		content:
			'msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lmsg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lolol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol'
	},
	{
		sender: true,
		content:
			'msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol msg lol'
	}
];

export default function Chat() {
	return (
		<main className='grow flex gap-6'>
			<div className='flex flex-col'>
				<div className='grow overflow-auto'>
					<Conversation messages={messages} />
				</div>
				<MessageBox />
			</div>
			<aside className='gap-4 flex flex-col min-w-max justify-between'>
				<div className='gap-4 flex flex-col'>
					<Button>Load conversation</Button>
					<Button>Delete conversation</Button>
					<Button>Save conversation</Button>
					<label>Input</label>
					<AudioInput />
					<label>Output</label>
				</div>
				<div className='gap-4 flex flex-col'>
					<Button>Change language</Button>
					<Button>Change model</Button>
				</div>
			</aside>
		</main>
	);
}
