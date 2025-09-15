'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { FRIENDS_SUGGESTION } from '@/app/data/mock/friends';
import { Friend, FriendsSuggestion } from '@/app/types/friend';
import { addFriend } from '@/app/api/friend';
import { useFriendStore } from '@/app/store/useFriendStore';

const SuggestionList = () => {
  const [index, setIndex] = useState<number>(0);
  const friends = useFriendStore((state) => state.friends);

  // 이미 친구인 이름 집합
  // 원래 고유값인 id로 해야하지만, 랜덤으로 부여되기 때문에 클라이언트에서 필터링하기 어려움
  const friendNames = useMemo(
    () => new Set(friends.map((f) => f.name)),
    [friends],
  );

  // 추천 후보 중 이미 친구가 아닌 사람만 필터링
  const candidates = useMemo(
    () => FRIENDS_SUGGESTION.filter((s) => !friendNames.has(s.name)),
    [friendNames],
  );

  // 현재 보여줄 3명
  const visible = candidates.slice(index, index + 3);

  const handleFollow = async (user: FriendsSuggestion) => {
    // 이미 친구면 스킵
    if (friendNames.has(user.name)) return;

    const newFriend: Friend = {
      id: crypto.randomUUID(),
      name: user.name,
      profileImg: user.profileImg,
      status: 'offline',
    };

    // store에 추가
    await addFriend(newFriend);

    setIndex((prev) => prev + 1);
  };

  return (
    <div className='h-[144px] space-y-3'>
      {visible.length > 0 ? (
        visible.map((user) => (
          <div
            key={user.name}
            className='flex items-center justify-between'
          >
            <div className='flex items-center space-x-3'>
              <Image
                src={user.profileImg}
                alt={user.name}
                width={40}
                height={40}
                className='h-10 w-10 rounded-full object-cover'
              />
              <div>
                <p className='text-12m text-text-primary md:text-14m'>
                  {user.name}
                </p>
                <p className='text-10r text-text-light md:text-12r'>
                  {user.mutual}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleFollow(user)}
              className='rounded-full bg-bg-enable px-4 py-1 text-12m text-white transition-colors hover:bg-bg-hover active:bg-bg-active'
            >
              Follow
            </button>
          </div>
        ))
      ) : (
        <p className='py-4 text-center text-12m text-text-light md:text-14m'>
          추천 친구가 없습니다.
        </p>
      )}
    </div>
  );
};

export default SuggestionList;
