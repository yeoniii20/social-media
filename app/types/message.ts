import { StaticImageData } from 'next/image';
import { Status } from './user';

export interface Message {
  id: number;
  name: string;
  profileImg: string | StaticImageData;
  lastMsg: string;
  dateTime: string;
  status: Status;
}

export interface ChatMessage {
  id: number;
  senderId: number | 'me';
  content: string;
  dateTime: string;
  isMe: boolean;
}

export interface ChatData {
  user: {
    id: number;
    name: string;
    profileImg: string | StaticImageData;
    status: Status;
  };
  messages: ChatMessage[];
}
