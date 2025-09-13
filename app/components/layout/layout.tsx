'use client';

import React from 'react';
import MobileBottomNav from './mobile/bottomNav';
import { currentUser } from '@/app/data/mock/user';
import LeftSidebar from './leftSidebar';
import RightSidebar from './rightSidebar';
import useResponsive from '@/app/hooks/useResponsive';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLg = useResponsive('lg');

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-light via-pink-light to-skyblue-light'>
      <div className='mx-auto flex max-w-7xl'>
        {/* Left Sidebar */}
        {isLg && <LeftSidebar currentUser={currentUser} />}

        {/* Children */}
        <main className='h-screen flex-1 overflow-y-auto no-scrollbar'>
          {children}
        </main>

        {/* Right Sidebar */}
        {isLg && <RightSidebar />}
      </div>

      {/* Mobile Bottom Navigation */}
      {!isLg && <MobileBottomNav />}
    </div>
  );
};

export default Layout;
