'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFriendStore } from '@/app/store/useFriendStore';
import Searchbar from '@/app/components/searchbar';
import { deleteFriend } from '@/app/api/friend';
import { statusColors } from '@/app/utils/statusColors';
import { FRIEND_REQUESTS } from '@/app/data/mock/friends';

const FriendsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'friends' | 'requests'>('friends');
  const friends = useFriendStore((state) => state.friends);

  const requestCnt = FRIEND_REQUESTS.length;

  // 검색 필터링
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 언팔로우
  const handleUnfollow = async (id: string) => {
    await deleteFriend(id);
  };

  return (
    <div className='mx-auto flex h-full max-w-2xl flex-col px-4 pt-6'>
      {/* 상단 고정 영역 */}
      <Searchbar
        value={searchTerm}
        onChange={setSearchTerm}
      />

      {/* 탭 메뉴 */}
      <div className='mb-4 flex border-b border-gray-200 text-14m md:text-16m'>
        <button
          onClick={() => setActiveTab('friends')}
          className={`flex-1 pb-2 text-center ${
            activeTab === 'friends'
              ? 'border-b-2 border-pink-base text-pink-base'
              : 'text-text-light'
          }`}
        >
          친구 목록
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`flex-1 pb-2 text-center ${
            activeTab === 'requests'
              ? 'border-b-2 border-pink-base text-pink-base'
              : 'text-text-light'
          }`}
        >
          친구 신청 ({requestCnt})
        </button>
      </div>

      {/* 친구 목록 */}
      {activeTab === 'friends' && (
        <div className='flex-1 divide-y divide-pink-base/5 overflow-y-auto no-scrollbar'>
          {requestCnt > 0 ? (
            filteredFriends.map((friend) => (
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
                    {friend.status && (
                      <span
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusColors[friend.status]}`}
                      />
                    )}
                  </div>
                  <p className='text-14m text-text-primary md:text-16m'>
                    {friend.name}
                  </p>
                </div>
                <button
                  onClick={() => handleUnfollow(friend.id)}
                  className='rounded-full bg-bg-extraHard px-4 py-1 text-12m text-white transition-colors hover:bg-bg-hover active:bg-bg-active md:py-1.5'
                >
                  unfollow
                </button>
              </div>
            ))
          ) : (
            <p className='py-4 text-center text-12m text-text-light md:text-14m'>
              일치하는 사용자가 없습니다.
            </p>
          )}
        </div>
      )}

      {/* 친구 신청 목록 */}
      {activeTab === 'requests' && (
        <div className='flex-1 divide-y divide-pink-base/5 overflow-y-auto no-scrollbar'>
          {FRIEND_REQUESTS.length > 0 ? (
            FRIEND_REQUESTS.map((req) => (
              <div
                key={req.id}
                className='flex items-center justify-between py-2'
              >
                <div className='flex items-center space-x-3'>
                  <div className='relative h-12 w-12'>
                    <Image
                      src={req.profileImg}
                      alt={req.name}
                      fill
                      className='rounded-full object-cover'
                    />
                  </div>
                  <p className='text-14m text-text-primary md:text-16m'>
                    {req.name}
                  </p>
                </div>
                <div className='flex space-x-2'>
                  <button className='rounded-full bg-bg-enable px-4 py-1 text-12m text-white hover:bg-bg-hover'>
                    수락
                  </button>
                  <button className='rounded-full bg-gray-200 px-4 py-1 text-12m text-text-primary hover:bg-gray-300'>
                    거절
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className='py-4 text-center text-12m text-text-light md:text-14m'>
              친구 신청이 없습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
