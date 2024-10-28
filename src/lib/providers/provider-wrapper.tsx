'use client';

import { ReactNode } from 'react';
import { ChatProvider } from '@/lib/providers/chat-provider';
import { EyesProvider } from '@/lib/providers/eyes-provider';

export default function ({ children }: { children: ReactNode }) {
  return (
    <ChatProvider>
      <EyesProvider>{children}</EyesProvider>
    </ChatProvider>
  );
}
