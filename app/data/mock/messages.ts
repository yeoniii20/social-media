import { Status } from '@/app/types/user';

import friend7 from '@/app/images/icon/friends/friend7.png';
import friend8 from '@/app/images/icon/friends/friend8.png';
import friend11 from '@/app/images/icon/friends/friend11.png';
import friend14 from '@/app/images/icon/friends/friend14.png';
import { ChatData, Message } from '@/app/types/message';

export const MESSAGE_LIST: Message[] = [
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

export const CHAT_DATA_LIST: Record<number, ChatData> = {
  1: {
    user: {
      id: 1,
      name: '박현수',
      profileImg: friend7,
      status: 'online',
    },
    messages: [
      {
        id: 1,
        senderId: 1,
        content: '안녕하세요!',
        dateTime: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        isMe: false,
      },
      {
        id: 2,
        senderId: 'me',
        content: '안녕하세요~ 잘 지내시죠?',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 3 + 20000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 3,
        senderId: 1,
        content: '네 요즘 회사가 좀 바쁘네요 ㅎㅎ',
        dateTime: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        isMe: false,
      },
      {
        id: 4,
        senderId: 'me',
        content: '고생 많으시겠어요. 주말엔 푹 쉬세요!',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 2 + 30000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 5,
        senderId: 1,
        content: '다음에 시간되면 밥 한 번 먹어요!',
        dateTime: new Date(Date.now() - 1000 * 30).toISOString(),
        isMe: false,
      },
    ],
  },
  2: {
    user: {
      id: 2,
      name: '권현서',
      profileImg: friend8,
      status: 'offline',
    },
    messages: [
      {
        id: 1,
        senderId: 2,
        content: '야 이거 봤어? 🤣',
        dateTime: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        isMe: false,
      },
      {
        id: 2,
        senderId: 'me',
        content: '뭔데?ㅋㅋㅋ',
        dateTime: new Date(Date.now() - 1000 * 60 * 29).toISOString(),
        isMe: true,
      },
      {
        id: 3,
        senderId: 2,
        content: 'https://youtu.be/dQw4w9WgXcQ',
        dateTime: new Date(Date.now() - 1000 * 60 * 28).toISOString(),
        isMe: false,
      },
      {
        id: 4,
        senderId: 'me',
        content: 'ㅋㅋㅋㅋㅋㅋㅋ 아 뭐야 낚였네',
        dateTime: new Date(Date.now() - 1000 * 60 * 28 + 5000).toISOString(),
        isMe: true,
      },
    ],
  },
  3: {
    user: {
      id: 3,
      name: '최유림',
      profileImg: friend11,
      status: 'online',
    },
    messages: [
      {
        id: 1,
        senderId: 3,
        content: '오늘 날씨 진짜 좋다 ☀️',
        dateTime: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        isMe: false,
      },
      {
        id: 2,
        senderId: 'me',
        content: '맞아요! 산책하기 딱이던데요?',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 5 + 20000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 3,
        senderId: 3,
        content: '퇴근하고 강아지랑 산책 다녀올 거예요 🐶',
        dateTime: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        isMe: false,
      },
      {
        id: 4,
        senderId: 'me',
        content: '좋네요! 사진도 찍어서 보내주세요~',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 4 + 60000,
        ).toISOString(),
        isMe: true,
      },
    ],
  },
  4: {
    user: {
      id: 4,
      name: '유지수',
      profileImg: friend14,
      status: 'away',
    },
    messages: [
      {
        id: 1,
        senderId: 4,
        content: '내일 발표 준비 다 했어?',
        dateTime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        isMe: false,
      },
      {
        id: 2,
        senderId: 'me',
        content: '아직 조금 남았어',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 20000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 3,
        senderId: 'me',
        content: '오늘 밤에 마무리할 듯?!',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 20000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 4,
        senderId: 4,
        content: '오케이! 화이팅 💪',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 30000,
        ).toISOString(),
        isMe: false,
      },
      {
        id: 5,
        senderId: 'me',
        content: '고마워~',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 60000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 6,
        senderId: 'me',
        content: '끝나고 같이 저녁 먹을거지?',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 60000,
        ).toISOString(),
        isMe: true,
      },
      {
        id: 7,
        senderId: 4,
        content: '응!',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 70000,
        ).toISOString(),
        isMe: false,
      },
      {
        id: 8,
        senderId: 4,
        content: '끝나면 전화해',
        dateTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 + 70000,
        ).toISOString(),
        isMe: false,
      },
      {
        id: 9,
        senderId: 'me',
        content: '알았어~ 빨리 끝내볼게',
        dateTime: new Date(Date.now() - 1000 * 60 * 60 * 23).toISOString(),
        isMe: true,
      },
    ],
  },
};
