'use client';

import ChatInput from '@/components/chat/chat-input';
import ChatMessages from '@/components/chat/chat-messages';
import { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState<string>('');

  return (
    <main className='flex grow flex-col items-center justify-end pb-6'>
      <ChatMessages
        messages={[
          {
            type: 'user',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquid asperiores aut culpa cum doloremque enim illo inventore nam, nihil officia provident rem repellendus vitae voluptate voluptates! Doloribus, impedit.'
          },
          {
            type: 'ai',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquid asperiores aut culpa cum doloremque enim illo inventore nam, nihil officia provident rem repellendus vitae voluptate voluptates! Doloribus, impedit.'
          }
        ]}
      />
      <ChatInput
        message={message}
        setMessage={setMessage}
        className='max-w-[50rem]'
      />
    </main>
  );
}
