import { StaticImageData } from 'next/image';

export interface User {
  id: string;
  name: string;
  nickname: string;
  profileImage: string | StaticImageData;
  verified: boolean;
}

export type Status = 'online' | 'offline' | 'away';

export interface MyFeed {
  id: number;
  img: string | StaticImageData;
}
