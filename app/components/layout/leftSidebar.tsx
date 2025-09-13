'use client';

import React from 'react';
import { PC_NAV_ITEM } from '@/app/data/menu';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '@/app/types/user';
import Image from 'next/image';

interface LeftSidebarProps {
  currentUser: User;
}

/**
 * PC.ver에서 보이는 좌측 사이드바
 * @param currentUser 로그인된 유저 정보
 * @returns
 */
const LeftSidebar = ({ currentUser }: LeftSidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveTab = () => {
    const current = PC_NAV_ITEM.find((item) => {
      if (item.url === '/') return pathname === '/';

      return pathname.startsWith(item.url);
    });
    return current?.id ?? 'home';
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tabUrl: string) => {
    router.push(tabUrl);
  };

  return (
    <div className='h-screen w-80 border-r border-border p-6 backdrop-blur-md'>
      {/* 현재 유저 정보 */}
      <div className='mb-8'>
        <div className='mb-6 flex items-center space-x-4'>
          <Image
            src={currentUser.profileImage}
            alt={currentUser.name}
            width={64}
            height={64}
            className='rounded-full object-cover'
          />
          <div>
            <h2 className='text-16b text-text-primary'>{currentUser.name}</h2>
            <p className='text-14r text-text-light'>@{currentUser.nickname}</p>
          </div>
        </div>
      </div>

      {/* 메뉴 */}
      <nav className='space-y-2'>
        {PC_NAV_ITEM.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={index}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? 'bg-bg-enable text-white shadow-lg hover:bg-bg-hover active:bg-bg-active'
                  : 'text-text-secondary hover:bg-bg-extraSoft'
              }`}
              onClick={() => handleTabClick(item.url)}
            >
              <div className='flex items-center space-x-3'>
                <IconComponent size={20} />
                <span className='text-16m'>{item.label}</span>
              </div>
              {item.count && (
                <div className='flex h-5 w-5 items-center justify-center rounded-full bg-red-base'>
                  <span className='text-center text-12r text-white'>
                    {item.count}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default LeftSidebar;
