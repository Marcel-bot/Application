import ChatInput from '@/components/chat/chat-input';
import UserMessage from '@/components/chat/user-message';
import AgentMessage from '@/components/chat/agent-message';
import { Message } from '@/lib/types';

export default function ({ messages }: { messages: Message[] }) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-between pb-4 pt-12'>
      <div className='flex w-full flex-col items-center overflow-auto'>
        <div className='flex w-full max-w-[48rem] flex-col gap-4 pb-20'>
          {messages.map((message, index) =>
            message.type === 'user' ? (
              <UserMessage key={index} message={message} />
            ) : (
              <AgentMessage key={index} message={message} />
            )
          )}
        </div>
      </div>
      <ChatInput />
    </div>
  );
}
