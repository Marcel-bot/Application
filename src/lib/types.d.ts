import { actionIcons } from '@/lib/data/action-icons';
import { ReactNode } from 'react';

export interface Action {
  type: keyof actionIcons;
  params: string[];
}

export interface UserMessage {
  type: 'user';
  content: ReactNode;
}

export interface AgentMessage {
  type: 'agent';
  content: ReactNode;
  analyticActions: Action[];
  outputActions: Action[];
}

export type Message = UserMessage | AgentMessage;
