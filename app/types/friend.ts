import { StaticImageData } from 'next/image';
import { Status } from './user';

export interface Friend {
  id: string;
  name: string;
  profileImg: string | StaticImageData;
  status: Status;
}

export interface FriendsSuggestion {
  id: string;
  name: string;
  profileImg: string | StaticImageData;
  mutual: string;
}
