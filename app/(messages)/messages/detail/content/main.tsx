'use client';

import React, { useState } from 'react';
import {
  Phone,
  Video,
  MoreHorizontal,
  ArrowLeftIcon,
  Send,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CHAT_DATA_LIST } from '@/app/data/mock/messages';
import Image from 'next/image';
import useResponsive from '@/app/hooks/useResponsive';
import { formatMessageTime } from '@/app/utils/timeFormat';
import { ChatMessage } from '@/app/types/message';

// 상태 타입 정의
type Status = 'online' | 'offline' | 'away';

const statusColors: Record<Status, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-400',
};

const MainContent = () => {
  const params = useSearchParams();
  const router = useRouter();
  const id = Number(params.get('id'));
  const isLg = useResponsive('lg');
  const chatData = CHAT_DATA_LIST[id];

  const { user } = chatData;

  const [messages, setMessages] = useState<ChatMessage[]>(chatData.messages);
  const [inputValue, setInputValue] = useState<string>('');

  // 메시지 전송 핸들러
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      senderId: 'me' as const,
      content: inputValue,
      dateTime: new Date().toISOString(),
      isMe: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  if (!chatData) {
    return (
      <p className='py-4 text-center text-12m text-text-light md:text-14m'>
        대화를 찾을 수 없습니다.
      </p>
    );
  }

  return (
    <div className='mx-auto flex h-screen w-full max-w-2xl flex-col'>
      {/* 헤더 */}
      <div className='sticky top-0 z-10 flex items-center justify-between bg-pink-light px-4 py-3 shadow-sm'>
        {/* 헤더 내용 */}
        <div className='flex items-center space-x-3'>
          {isLg && (
            <button
              onClick={() => router.push('/messages')}
              className='rounded-full p-2 transition-colors hover:bg-bg-soft'
            >
              <ArrowLeftIcon className='h-5 w-5 text-text-menu' />
            </button>
          )}
          <div className='relative'>
            <div className='relative h-10 w-10 overflow-hidden rounded-full'>
              <Image
                src={user.profileImg}
                alt={user.name}
                fill
                className='object-cover'
              />
            </div>

            <span
              className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-border ${statusColors[user.status]}`}
            />
          </div>

          <div className='flex flex-col'>
            <h1 className='text-12m text-text-primary md:text-16m'>
              {user.name}
            </h1>
            <span className='text-10r text-text-light md:text-12r'>
              {user.status === 'online'
                ? '온라인'
                : user.status === 'away'
                  ? '자리비움'
                  : '오프라인'}
            </span>
          </div>
        </div>

        <div className='flex items-center space-x-1'>
          <button className='rounded-full p-2 transition-colors hover:bg-bg-soft'>
            <Phone className='h-5 w-5 text-text-menu' />
          </button>
          <button className='rounded-full p-2 transition-colors hover:bg-bg-soft'>
            <Video className='h-5 w-5 text-text-menu' />
          </button>
          <button className='rounded-full p-2 transition-colors hover:bg-bg-soft'>
            <MoreHorizontal className='h-5 w-5 text-text-menu' />
          </button>
        </div>
      </div>

      {/* 메시지 영역 */}
      <div className='pt- flex-1 space-y-4 overflow-y-auto px-4 py-4 no-scrollbar'>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex max-w-xs lg:max-w-md ${message.isMe ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}
            >
              {!message.isMe && (
                <div className='relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full'>
                  <Image
                    src={user.profileImg}
                    alt={user.name}
                    fill
                    className='object-cover'
                  />
                </div>
              )}

              <div
                className={`flex flex-col ${message.isMe ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`rounded-full px-4 py-2 shadow-md ${
                    message.isMe
                      ? 'bg-pink-base/80 text-white'
                      : 'bg-white text-text-primary'
                  }`}
                >
                  <p className='text-12r leading-5 md:text-12r'>
                    {message.content}
                  </p>
                </div>
                <span className='mt-1 text-10r text-text-light'>
                  {formatMessageTime(message.dateTime)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 입력창 */}
      <div className='sticky bottom-0 px-4 py-4'>
        <div className='relative'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder='메세지를 입력해주세요'
            className='w-full rounded-full bg-bg-extralight py-2 pl-10 pr-4 text-12r text-text-primary shadow-sm transition-all placeholder:text-text-light focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-base md:text-14r'
          />
          <Send
            size={18}
            onClick={handleSend}
            className='absolute left-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-text-menu hover:text-purple-base'
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
