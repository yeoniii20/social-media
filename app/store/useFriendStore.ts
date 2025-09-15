import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Friend } from '../types/friend';
import { FRIENDS_LIST } from '../data/mock/friends';

interface FriendState {
  friends: Friend[];
  setFriends: (friends: Friend[]) => void;
  addFriend: (friend: Friend) => void;
  deleteFriend: (friendId: string) => void;
  clearFriends: () => void;
}

export const useFriendStore = create<FriendState>()(
  persist(
    (set, get) => ({
      friends: FRIENDS_LIST,

      setFriends: (friends: Friend[]) => set({ friends }),

      addFriend: (friend: Friend) =>
        set((state) => ({ friends: [...state.friends, friend] })),

      deleteFriend: (friendId: string) =>
        set((state) => ({
          friends: state.friends.filter((f) => f.id !== friendId),
        })),

      clearFriends: () => set({ friends: [] }),
    }),
    { name: 'friend-storage' },
  ),
);
