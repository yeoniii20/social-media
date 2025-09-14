'use client';

import { create } from 'zustand';
import { User } from '../types/user';
import myProfileImg from '@/app/images/icon/profile/profile4.png';

interface UserState {
  currentUser: User;
}

export const useUserStore = create<UserState>(() => ({
  currentUser: {
    id: 'my',
    name: '권수연',
    nickname: 'suyoooi',
    profileImage: myProfileImg,
    verified: false,
  },
}));
