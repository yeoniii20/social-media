'use client';

import { Heart, MessageCircle } from 'lucide-react';
import { FaRetweet } from 'react-icons/fa6';
import React from 'react';

interface PostActionsProps {
  isLiked: boolean;
  likesCount: number;
  isRetweeted: boolean;
  retweetesCount: number;
  commentsCount: number;
  onLike: () => void;
  onRetweet: () => void;
  onToggleComments: () => void;
}

/**
 * 게시물 액션 버튼 영역 (좋아요 / 댓글 / 리트윗)
 *
 * @param {boolean} isLiked - 현재 좋아요 상태
 * @param {number} likesCount - 좋아요 개수
 * @param {boolean} isRetweeted - 현재 리트윗 상태
 * @param {number} retweetesCount - 리트윗 개수
 * @param {number} commentsCount - 댓글 개수
 * @param {() => void} onLike - 좋아요 버튼 클릭 핸들러
 * @param {() => void} onRetweet - 리트윗 버튼 클릭 핸들러
 * @param {() => void} onToggleComments - 댓글 버튼 클릭 핸들러
 * @returns {JSX.Element} 게시물 액션 버튼 JSX
 */
const PostActions = ({
  isLiked,
  likesCount,
  isRetweeted,
  retweetesCount,
  commentsCount,
  onLike,
  onRetweet,
  onToggleComments,
}: PostActionsProps) => {
  return (
    <div className='flex gap-3 md:gap-4'>
      {/* 좋아요 */}
      <button
        onClick={onLike}
        className={`flex items-center space-x-1 rounded-full transition-all md:space-x-2 ${
          isLiked ? 'text-red-base' : 'text-text-light hover:bg-bg-extraSoft'
        }`}
      >
        <Heart
          size={16}
          className={`md:h-[18px] md:w-[18px] ${
            isLiked ? 'fill-current text-red-base' : ''
          }`}
        />
        <span className='text-14m md:text-16m'>{likesCount}</span>
      </button>

      {/* 댓글 */}
      <button
        onClick={onToggleComments}
        className='flex items-center space-x-1 rounded-full text-text-light transition-colors hover:bg-bg-extraSoft md:space-x-2'
      >
        <MessageCircle
          size={16}
          className='md:h-[18px] md:w-[18px]'
        />
        <span className='text-14m md:text-16m'>{commentsCount}</span>
      </button>

      {/* 리트윗 */}
      <button
        onClick={onRetweet}
        className={`flex items-center space-x-1 rounded-full transition-all md:space-x-2 ${
          isRetweeted
            ? 'text-purple-base'
            : 'text-text-light hover:bg-bg-extraSoft'
        }`}
      >
        <FaRetweet
          size={16}
          className={`md:h-[18px] md:w-[18px] ${
            isRetweeted ? 'fill-current text-purple-base' : ''
          }`}
        />
        <span className='text-14m md:text-16m'>{retweetesCount}</span>
      </button>
    </div>
  );
};

export default PostActions;
