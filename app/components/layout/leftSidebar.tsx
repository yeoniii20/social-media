import React from 'react';
import { NAV_ITEM } from '@/app/data/menu';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUserStore } from '@/app/store/useUserStore';

/**
 * PC.ver에서 보이는 좌측 사이드바
 * @returns
 */
const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const user = useUserStore();

  const getActiveTab = () => {
    const current = NAV_ITEM.find((item) => {
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
            src={user.currentUser.profileImage}
            alt={user.currentUser.name}
            width={64}
            height={64}
            className='rounded-full object-cover'
          />
          <div>
            <h2 className='text-16b text-text-primary'>
              {user.currentUser.name}
            </h2>
            <p className='text-14r text-text-light'>
              @{user.currentUser.nickname}
            </p>
          </div>
        </div>
      </div>

      {/* 메뉴 */}
      <nav className='space-y-2'>
        {NAV_ITEM.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          // 공통 스타일
          const baseStyle =
            'flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200';

          // 활성화 상태 스타일
          const activeStyle =
            'bg-bg-enable text-white shadow-lg hover:bg-bg-hover active:bg-bg-active';

          // 비활성화 상태 스타일
          const inactiveStyle = 'text-text-secondary hover:bg-bg-extraSoft';

          // special 버튼 스타일
          const specialStyle =
            'bg-gradient-to-r from-purple-base/15 to-pink-base/10 text-text-secondary shadow-sm hover:opacity-90 active:opacity-80';

          // special 버튼 활성화 상태 스타일
          const specialActiveStyle =
            'bg-gradient-to-r from-purple-base to-pink-base text-white shadow-lg hover:opacity-90 active:opacity-80';

          return (
            <button
              key={index}
              className={`${baseStyle} ${
                item.special
                  ? isActive
                    ? specialActiveStyle
                    : specialStyle
                  : isActive
                    ? activeStyle
                    : inactiveStyle
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
