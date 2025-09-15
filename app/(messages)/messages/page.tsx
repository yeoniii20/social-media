'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { formatTimeAgo } from '@/app/utils/timeFormat';
import Searchbar from '@/app/components/searchbar';
import { truncateText } from '@/app/utils/text';
import { MESSAGE_LIST } from '@/app/data/mock/messages';
import Image from 'next/image';
import { Status } from '@/app/types/user';
import useResponsive from '@/app/hooks/useResponsive';

const statusColors: Record<Status, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-400',
};

const MessagesPage = () => {
  const router = useRouter();
  const isMd = useResponsive('md');

  const [limit, setLimit] = useState<number>(isMd ? 20 : 13);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 검색어 필터링
  const filteredMessages = MESSAGE_LIST.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 메시지 클릭 핸들러
  const handleMessageClick = (messageId: number) => {
    router.push(`/messages/detail?id=${messageId}`);
  };

  useEffect(() => {
    if (isMd) {
      setLimit(20);
    } else return setLimit(13);
  }, [isMd]);

  return (
    <div className='mx-auto h-full w-full max-w-2xl overflow-y-auto px-4 pt-6 no-scrollbar'>
      {/* 상단 고정 영역 */}
      <Searchbar
        value={searchTerm}
        onChange={setSearchTerm}
      />

      {/* 메세지 목록 */}
      <div className='space-y-2 md:space-y-3'>
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className='flex cursor-pointer items-center justify-between rounded-2xl bg-white/80 p-2.5 shadow-sm backdrop-blur-sm transition-colors hover:bg-bg-extraSoft md:p-3.5'
              onClick={() => handleMessageClick(msg.id)}
            >
              {/* 프로필 + 이름 + 메시지 */}
              <div className='flex items-center space-x-2 md:space-x-3'>
                <div className='relative h-12 w-12'>
                  <Image
                    src={msg.profileImg}
                    alt={msg.name}
                    fill
                    className='rounded-full object-cover'
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusColors[msg.status]}`}
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-14m text-text-primary md:text-16m'>
                    {msg.name}
                  </span>
                  <span className='truncate text-12r text-text-light md:text-14r'>
                    {truncateText(msg.lastMsg, limit)}
                  </span>
                </div>
              </div>

              {/* 시간 */}
              <span className='ml-2 whitespace-nowrap text-12r text-text-light md:text-14r'>
                {msg.dateTime ? formatTimeAgo(msg.dateTime) : ''}
              </span>
            </div>
          ))
        ) : (
          <p className='py-4 text-center text-12m text-text-light md:text-14m'>
            일치하는 사용자가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
