import React from 'react';
import { NAV_ITEM } from '@/app/data/menu';
import { usePathname, useRouter } from 'next/navigation';

const MobileBottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

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
    <div className='fixed bottom-0 left-0 right-0 z-50'>
      <div className='border-t border-border bg-white/95 px-4 py-0 backdrop-blur-md'>
        <div className='flex items-center justify-around'>
          {NAV_ITEM.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                className={`relative flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 transition-all duration-200 ${
                  item.special ? '-translate-y-2 transform' : ''
                }`}
                onClick={() => handleTabClick(item.url)}
              >
                {/* 가운데 + 버튼 ui 차별화 */}
                {item.special ? (
                  <div className='absolute -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-base to-pink-base shadow-lg'>
                    <IconComponent
                      size={22}
                      className='text-white'
                      strokeWidth={2.5}
                    />
                  </div>
                ) : (
                  <>
                    <div
                      className={`relative rounded-full p-2 transition-colors ${
                        isActive ? 'bg-purple-light' : 'hover:bg-bg-extraSoft'
                      }`}
                    >
                      <IconComponent
                        size={18}
                        className={`transition-colors ${
                          isActive ? 'text-purple-base' : 'text-text-light'
                        }`}
                        strokeWidth={isActive ? 2.5 : 2}
                      />

                      {/* 알림이 있을 경우 숫자 표시 */}
                      {item.count && (
                        <div className='absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-base'>
                          <span className='text-10m text-white'>
                            {item.count}
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
