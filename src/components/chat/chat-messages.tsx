import UserMessage from '@/components/chat/user-message';
import AIMessage from '@/components/chat/ai-message';
import { Fragment } from 'react';

export default function ChatMessages({
  messages
}: {
  messages: {
    content: string;
    type: 'user' | 'ai';
  }[];
}) {
  return (
    <div className='flex w-full max-w-[50rem] flex-col gap-6 pb-6'>
      {messages.map((message, index) => (
        <Fragment key={index}>
          {message.type === 'user' ? (
            <UserMessage
              className='max-w-[30rem] self-end'
              content={message.content}
            />
          ) : (
            <AIMessage className='self-stretch' content={message.content} />
          )}
        </Fragment>
      ))}
    </div>
  );
}
