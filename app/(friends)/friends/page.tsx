'use client';

import Image from 'next/image';
import { Status } from '@/app/types/user';
import { FRIENDS_LIST } from '@/app/data/mock/friends';
import Searchbar from '@/app/components/searchbar';

const statusColors: Record<Status, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-400',
};

const FriendsPage = () => {
  return (
    <div className='mx-auto flex h-full max-w-2xl flex-col px-4 py-6'>
      {/* 상단 고정 영역 */}
      <Searchbar />

      {/* 친구 목록 */}
      <div className='flex-1 divide-y divide-pink-base/5 overflow-y-auto no-scrollbar'>
        {FRIENDS_LIST.map((friend) => (
          <div
            key={friend.id}
            className='flex items-center justify-between py-2'
          >
            <div className='flex items-center space-x-3'>
              <div className='relative h-12 w-12'>
                <Image
                  src={friend.profileImg}
                  alt={friend.name}
                  fill
                  className='rounded-full object-cover'
                />
                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusColors[friend.status]}`}
                />
              </div>
              <p className='text-14m text-text-primary md:text-16m'>
                {friend.name}
              </p>
            </div>
            <button className='rounded-full bg-bg-extraHard px-4 py-1 text-12m text-white transition-colors hover:bg-bg-hover active:bg-bg-active md:py-1.5'>
              unfollow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
