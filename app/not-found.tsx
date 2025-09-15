'use client';

import React, { useState, useEffect } from 'react';
import { Home, MessageCircle, Heart, Star } from 'lucide-react';

export default function NotFound() {
  const [isWiggling, setIsWiggling] = useState<boolean>(false);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoMessages = () => {
    window.location.href = '/messages';
  };

  // 랜덤 위글링 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex h-screen items-center justify-center overflow-hidden px-4'>
      {/* 백그라운드 아이콘들 */}
      <div
        className='absolute left-10 top-10 animate-bounce'
        style={{ animationDelay: '0s' }}
      >
        <Heart className='h-6 w-6 fill-pink-300 text-pink-300' />
      </div>
      <div
        className='absolute right-20 top-32 animate-bounce'
        style={{ animationDelay: '1s' }}
      >
        <Star className='h-5 w-5 fill-yellow-300 text-yellow-300' />
      </div>
      <div
        className='absolute bottom-20 left-16 animate-bounce'
        style={{ animationDelay: '2s' }}
      >
        <Heart className='h-4 w-4 fill-purple-300 text-purple-300' />
      </div>
      <div
        className='absolute right-10 top-1/4 animate-bounce'
        style={{ animationDelay: '0.5s' }}
      >
        <Star className='h-7 w-7 fill-pink-300 text-pink-300' />
      </div>

      <div className='w-full max-w-md text-center'>
        {/* 404 */}
        <div className='relative mb-8'>
          <div
            className={`select-none text-7xl font-bold text-pink-base/60 transition-transform duration-300 md:text-8xl ${isWiggling ? 'scale-105 animate-pulse' : ''}`}
          >
            404
          </div>
        </div>

        {/* 안내 문구 */}
        <p className='mb-8 text-14m leading-relaxed text-text-secondary md:text-16m'>
          요청하신 페이지를 찾을 수 없습니다.
        </p>

        {/* 액션 버튼들 */}
        <div className='space-y-3'>
          <button
            onClick={handleGoHome}
            className='group relative flex w-full transform items-center justify-center space-x-2 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-4 font-medium text-white transition-all duration-300 hover:from-pink-500 hover:to-pink-600 hover:shadow-xl'
          >
            <div className='absolute inset-0 -translate-x-full -skew-x-12 transform bg-white/20 transition-transform duration-700 group-hover:translate-x-full'></div>
            <Home className='relative z-10 h-5 w-5' />
            <span className='relative z-10'>피드 구경하기</span>
          </button>

          <button
            onClick={handleGoMessages}
            className='group relative flex w-full transform items-center justify-center space-x-2 overflow-hidden rounded-3xl bg-gradient-to-r from-purple-400 to-indigo-400 px-6 py-4 font-medium text-white transition-all duration-300 hover:from-purple-500 hover:to-indigo-500 hover:shadow-xl'
          >
            <div className='absolute inset-0 -translate-x-full -skew-x-12 transform bg-white/20 transition-transform duration-700 group-hover:translate-x-full'></div>
            <MessageCircle className='relative z-10 h-5 w-5' />
            <span className='relative z-10'>메시지 보러가기</span>
          </button>
        </div>

        {/* 떠다니는 장식 요소들 */}
        <div className='absolute -left-4 -top-4 h-24 w-24 animate-pulse rounded-full bg-pink-200/40 blur-xl'></div>
        <div
          className='absolute -bottom-8 -right-8 h-20 w-20 animate-pulse rounded-full bg-purple-200/40 blur-xl'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute -left-8 top-1/3 h-16 w-16 animate-pulse rounded-full bg-yellow-200/40 blur-lg'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute -right-4 bottom-1/4 h-12 w-12 animate-pulse rounded-full bg-indigo-200/40 blur-lg'
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      {/* 구름들 */}
      <div
        className='absolute left-1/4 top-8 h-8 w-16 animate-bounce rounded-full bg-white/50'
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className='absolute right-1/4 top-24 h-6 w-12 animate-bounce rounded-full bg-white/60'
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className='absolute bottom-32 left-[15%] h-6 w-12 animate-bounce rounded-full bg-white/60'
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className='absolute bottom-12 right-1/3 h-6 w-12 animate-bounce rounded-full bg-white/60'
        style={{ animationDelay: '1.5s' }}
      />
    </div>
  );
}
