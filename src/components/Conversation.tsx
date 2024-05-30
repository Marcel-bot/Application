interface message {
	sender: boolean;
	content: string;
}

interface props {
	messages: message[];
}

export default function Conversation({ messages }: props) {
	return (
		<section className='flex flex-col gap-4'>
			{messages.map((message, index) =>
				message.sender ? (
					<div
						className='bg-slim-gray rounded-3xl border border-white/20 py-2.5 px-4 max-w-[60%] self-end'
						key={index}
					>
						{message.content}
					</div>
				) : (
					<div key={index}>{message.content}</div>
				)
			)}
		</section>
	);
}
