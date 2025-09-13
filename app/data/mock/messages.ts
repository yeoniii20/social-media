import { Status } from '@/app/types/user';

import friend7 from '@/app/images/icon/friends/friend7.png';
import friend8 from '@/app/images/icon/friends/friend8.png';
import friend11 from '@/app/images/icon/friends/friend11.png';
import friend14 from '@/app/images/icon/friends/friend14.png';

export const MESSAGE_LIST = [
  {
    id: 1,
    name: '박현수',
    profileImg: friend7,
    lastMsg: '내일 뭐해?',
    dateTime: new Date(Date.now() - 1000 * 30).toISOString(), // 30초 전
    status: 'online' as Status,
  },
  {
    id: 2,
    name: '권현서',
    profileImg: friend8,
    lastMsg: '이거 진짜 웃기다ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    dateTime: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5분 전
    status: 'offline' as Status,
  },
  {
    id: 3,
    name: '최유림',
    profileImg: friend11,
    lastMsg: '좋은 하루 보내~',
    dateTime: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2시간 전
    status: 'online' as Status,
  },
  {
    id: 4,
    name: '유지수',
    profileImg: friend14,
    lastMsg: '알겠어!',
    dateTime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 하루 전
    status: 'away' as Status,
  },
];
