'use client';

import Chat from '@/components/chat/chat';
import { chatPlaceholder } from '@/lib/data/chat-placeholder';

export default function Home() {
  return (
    <div className=''>
      <Chat messages={chatPlaceholder} />
    </div>
  );
}
