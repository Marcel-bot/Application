import { actionIcons } from '@/lib/data/action-icons';
import { ReactNode } from 'react';
import { BodyParts } from '@/lib/enum';

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

export interface Point {
  x: number;
  y: number;
}

export interface Bezier {
  start: Point;
  control1: Point;
  control2: Point;
  end: Point;
}

export interface Emotion {
  name: string;
  leftEye: Bezier[];
  rightEye: Bezier[];
}

export interface BodyPartModel {
  x: string;
  y: string;
  d: string;
  part: BodyParts;
  stroke?: string;
}
