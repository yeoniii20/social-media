import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatTimeAgo } from '@/app/utils/timeFormat';
import { Post } from '@/app/types/post';
import { useUserStore } from '@/app/store/useUserStore';

interface CommentSectionProps {
  post: Post;
}

const CommentSection = ({ post }: CommentSectionProps) => {
  const user = useUserStore();
  const [visibleComments, setVisibleComments] = useState<number>(3);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className='mt-4 border-t border-border pt-4'
    >
      <div className='space-y-3'>
        {post.commentList.slice(0, visibleComments).map((comment, index) => (
          <div
            key={index}
            className='flex items-start space-x-3'
          >
            <Image
              src={comment.author.profileImage}
              alt={comment.author.name}
              width={40}
              height={40}
              className='rounded-full object-cover'
            />
            <div className='flex-1'>
              <div className='rounded-2xl bg-bg-extraSoft px-4 py-2'>
                <div className='mb-1 flex items-center space-x-2'>
                  <span className='text-12m text-text-primary md:text-14m'>
                    {comment.author.name}
                  </span>
                  <span className='text-10r text-text-light md:text-12r'>
                    {formatTimeAgo(comment.createdAt)}
                  </span>
                </div>
                <p className='text-12r text-text-secondary md:text-14r'>
                  {comment.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 더보기 버튼 */}
      {visibleComments < post.commentList.length && (
        <button
          onClick={() => setVisibleComments(post.commentList.length)}
          className='mt-3 w-full text-12m text-text-light md:text-14m'
        >
          댓글 더보기 ({post.commentList.length - visibleComments}개)
        </button>
      )}

      {/* 댓글 작성 영역 */}
      <div className='mt-4 flex items-center space-x-3'>
        <Image
          src={user.currentUser.profileImage}
          alt={user.currentUser.name}
          width={40}
          height={40}
          className='h-8 w-8 rounded-full object-cover'
        />
        <input
          type='text'
          placeholder='댓글을 작성해보세요.'
          className='flex-1 rounded-full bg-bg-extraSoft px-4 py-2 text-12r text-text-primary focus:outline-none focus:ring-2 focus:ring-purple-base md:text-14r'
        />
      </div>
    </motion.div>
  );
};

export default CommentSection;
