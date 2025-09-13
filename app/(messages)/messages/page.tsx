'use client';

import useResponsive from '@/app/hooks/useResponsive';
import { ArrowLeft, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { formatTimeAgo } from '@/app/utils/timeFormat';

import { Status } from '@/app/types/user';
import { MESSAGE_LIST } from '@/app/data/mock/messages';
import { truncateText } from '@/app/utils/text';
import { useEffect, useState } from 'react';

const statusColors: Record<Status, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-400',
};

const MessagesPage = () => {
  const isMd = useResponsive('md');

  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    if (isMd) {
      setLimit(20);
    } else return setLimit(13);
  }, [isMd]);

  return (
    <div className='mx-auto h-full w-full max-w-2xl overflow-y-auto px-4 py-6 no-scrollbar'>
      {/* 상단 고정 영역 */}
      <div className='flex-shrink-0'>
        <div className='mb-6 w-full md:mb-8'>
          <div className='relative'>
            <Search
              size={18}
              className='absolute left-3 top-1/2 -translate-y-1/2 transform text-text-menu'
            />
            <input
              type='text'
              placeholder='Search...'
              className='w-full rounded-full bg-bg-extralight py-2 pl-10 pr-4 text-12r shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-base md:text-14r'
            />
          </div>
        </div>
      </div>

      {/* 메세지 목록 */}
      <div className='space-y-2 md:space-y-3'>
        {MESSAGE_LIST.map((msg) => (
          <div
            key={msg.id}
            className='flex cursor-pointer items-center justify-between rounded-2xl bg-white/80 p-2.5 shadow-sm backdrop-blur-sm transition-colors hover:bg-bg-extraSoft md:p-3.5'
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
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
