import { useFriendStore } from '@/app/store/useFriendStore';
import { Friend } from '@/app/types/friend';

/**
 * 친구 목록 가져오기 (페이징 흉내)
 * @param {number} page 불러올 페이지 수
 * @param {number} limit 한 페이지당 개수
 * @returns {Promise<{ friends: Friend[], hasMore: boolean }>}
 */
export const getMoreFriends = async (page: number, limit = 10) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const allFriends = useFriendStore.getState().friends;
  const start = (page - 1) * limit;
  const end = start + limit;
  const chunk = allFriends.slice(start, end);

  return { friends: chunk, hasMore: chunk.length === limit };
};

/**
 * 친구 추가
 * @param {AddFriend} friendData 추가할 친구 데이터
 * @returns {Promise<{ success: boolean, friend: Friend }>}
 */
export const addFriend = async (friendData: Friend) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const newFriend: Friend = {
    ...friendData,
    id: friendData.id ?? crypto.randomUUID(),
  };

  useFriendStore.getState().addFriend(newFriend);
  return { success: true, friend: newFriend };
};

/**
 * 친구 삭제
 * @param {string} friendId 삭제할 친구 아이디
 * @returns {Promise<{ success: boolean }>}
 */
export const deleteFriend = async (friendId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  useFriendStore.getState().deleteFriend(friendId);
  return { success: true };
};
