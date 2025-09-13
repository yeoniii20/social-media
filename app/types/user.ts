export interface User {
  id: string;
  name: string;
  nickname: string;
  profileImage: string;
  verified: boolean;
}

export type Status = 'online' | 'offline' | 'away';
