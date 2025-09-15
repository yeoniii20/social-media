import { Status } from '@/app/types/user';
import { Friend, FriendsSuggestion } from '@/app/types/friend';

import friend1 from '@/app/images/icon/friends/friend1.png';
import friend2 from '@/app/images/icon/friends/friend2.png';
import friend3 from '@/app/images/icon/friends/friend3.png';
import friend4 from '@/app/images/icon/friends/friend4.png';
import friend5 from '@/app/images/icon/friends/friend5.png';
import friend6 from '@/app/images/icon/friends/friend6.png';
import friend7 from '@/app/images/icon/friends/friend7.png';
import friend8 from '@/app/images/icon/friends/friend8.png';
import friend9 from '@/app/images/icon/friends/friend9.png';
import friend10 from '@/app/images/icon/friends/friend10.png';
import friend11 from '@/app/images/icon/friends/friend11.png';
import friend12 from '@/app/images/icon/friends/friend12.png';
import friend13 from '@/app/images/icon/friends/friend13.png';
import friend14 from '@/app/images/icon/friends/friend14.png';
import friend15 from '@/app/images/icon/friends/friend15.png';
import friend16 from '@/app/images/icon/friends/friend16.png';
import friend17 from '@/app/images/icon/friends/friend17.png';
import friend18 from '@/app/images/icon/friends/friend18.png';
import friend19 from '@/app/images/icon/friends/friend19.png';
import friend20 from '@/app/images/icon/friends/friend20.png';
import friend21 from '@/app/images/icon/friends/friend21.png';
import friend22 from '@/app/images/icon/friends/friend22.png';
import friend23 from '@/app/images/icon/friends/friend23.png';
import friend24 from '@/app/images/icon/friends/friend24.png';
import friend25 from '@/app/images/icon/friends/friend25.png';
import friend26 from '@/app/images/icon/friends/friend26.png';
import friend27 from '@/app/images/icon/friends/friend27.png';
import friend28 from '@/app/images/icon/friends/friend28.png';
import friend29 from '@/app/images/icon/friends/friend29.png';
import friend30 from '@/app/images/icon/friends/friend30.png';
import friend31 from '@/app/images/icon/friends/friend31.png';
import friend32 from '@/app/images/icon/friends/friend32.png';
import friend33 from '@/app/images/icon/friends/friend33.png';
import friend34 from '@/app/images/icon/friends/friend34.png';
import friend35 from '@/app/images/icon/friends/friend35.png';
import friend36 from '@/app/images/icon/friends/friend36.png';
import friend37 from '@/app/images/icon/friends/friend37.png';
import friend38 from '@/app/images/icon/friends/friend38.png';
import friend39 from '@/app/images/icon/friends/friend39.png';
import friend40 from '@/app/images/icon/friends/friend40.png';
import friend41 from '@/app/images/icon/friends/friend41.png';
import friend42 from '@/app/images/icon/friends/friend42.png';
import friend43 from '@/app/images/icon/friends/friend43.png';
import friend44 from '@/app/images/icon/friends/friend44.png';

export const FRIENDS_SUGGESTION: FriendsSuggestion[] = [
  {
    id: crypto.randomUUID(),
    name: '이창호',
    mutual: '함께 아는 친구 10명',
    profileImg: friend1,
  },
  {
    id: crypto.randomUUID(),
    name: '정승민',
    mutual: '함께 아는 친구 8명',
    profileImg: friend2,
  },
  {
    id: crypto.randomUUID(),
    name: '김지민',
    mutual: '함께 아는 친구 15명',
    profileImg: friend3,
  },
  {
    id: crypto.randomUUID(),
    name: '최진혁',
    mutual: '함께 아는 친구 1명',
    profileImg: friend33,
  },
  {
    id: crypto.randomUUID(),
    name: '이진수',
    mutual: '함께 아는 친구 4명',
    profileImg: friend34,
  },
  {
    id: crypto.randomUUID(),
    name: '박종오',
    mutual: '함께 아는 친구 3명',
    profileImg: friend35,
  },
  {
    id: crypto.randomUUID(),
    name: '김지원',
    mutual: '함께 아는 친구 1명',
    profileImg: friend36,
  },
  {
    id: crypto.randomUUID(),
    name: '박건희',
    mutual: '함께 아는 친구 19명',
    profileImg: friend37,
  },
  {
    id: crypto.randomUUID(),
    name: '유시은',
    mutual: '함께 아는 친구 7명',
    profileImg: friend38,
  },
  {
    id: crypto.randomUUID(),
    name: '홍지희',
    mutual: '함께 아는 친구 23명',
    profileImg: friend39,
  },
  {
    id: crypto.randomUUID(),
    name: '김별',
    mutual: '함께 아는 친구 4명',
    profileImg: friend40,
  },
];

export const FRIENDS_LIST: Friend[] = [
  {
    id: crypto.randomUUID(),
    name: '이진주',
    profileImg: friend4,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '구승택',
    profileImg: friend5,
    status: 'away' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김소연',
    profileImg: friend6,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '박현수',
    profileImg: friend7,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '권현서',
    profileImg: friend8,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김지현',
    profileImg: friend9,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김산하',
    profileImg: friend10,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '최유림',
    profileImg: friend11,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '송새미',
    profileImg: friend12,
    status: 'away' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김세연',
    profileImg: friend13,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '유지수',
    profileImg: friend14,
    status: 'away' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '강건하',
    profileImg: friend15,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '최진혁',
    profileImg: friend16,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '박도현',
    profileImg: friend17,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김예나',
    profileImg: friend18,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '이영은',
    profileImg: friend19,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김세진',
    profileImg: friend20,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '추영우',
    profileImg: friend21,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '권소연',
    profileImg: friend22,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '최진석',
    profileImg: friend23,
    status: 'away' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김제니',
    profileImg: friend24,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김성우',
    profileImg: friend25,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '이도현',
    profileImg: friend26,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '최지혜',
    profileImg: friend27,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '정승균',
    profileImg: friend28,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '권진아',
    profileImg: friend29,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '김지연',
    profileImg: friend30,
    status: 'online' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '우서희',
    profileImg: friend31,
    status: 'offline' as Status,
  },
  {
    id: crypto.randomUUID(),
    name: '남승원',
    profileImg: friend32,
    status: 'offline' as Status,
  },
];
