import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from 'lucide-react';
import Image from 'next/image';
import { formatTimeAgo } from '@/app/utils/timeFormat';
import { useSwipeable } from 'react-swipeable';
import { FaRetweet } from 'react-icons/fa6';
import { mockCategories, mockCategoriesIcons } from '@/app/data/mock/category';
import { formatHashtags } from '@/app/utils/formatHashtags';
import { Post } from '@/app/types/post';
import { useUserStore } from '@/app/store/useUserStore';
import { toggleLike, toggleRetweet } from '@/app/api/post';
import { usePostStore } from '@/app/store/usePostStore';
import ConfirmModal from '../modal/confirmModal';

interface PostCardProps {
  post: Post;
  onDelete?: () => void;
}

/**
 * 포스팅 카드 컴포넌트
 * @param post 포스팅 데이터
 * @param onDelete 삭제 핸들러
 * @returns
 */
const PostCard = ({ post, onDelete }: PostCardProps) => {
  const user = useUserStore();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isLiked, setIsLiked] = useState<boolean>(post.isLiked);
  const [isRetweeted, setIsRetweeted] = useState<boolean>(post.isRetweeted);
  const [likesCount, setLikesCount] = useState<number>(post.likes);
  const [retweetesCount, setRetweetesCount] = useState<number>(post.retweets);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleComments, setVisibleComments] = useState<number>(3);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { content, tags } = formatHashtags(post.content);

  // 좋아요
  const handleLike = async () => {
    await toggleLike(post.id);
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  // 리트윗
  const handleRetweet = async () => {
    await toggleRetweet(post.id);
    setIsRetweeted(!isRetweeted);
    setRetweetesCount(isRetweeted ? retweetesCount - 1 : retweetesCount + 1);
  };

  // 댓글 창 열기
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // 이미지 이전으로 가기
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
  };

  // 이미지 다음으로 가기
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
  };

  // swipe 이벤트 핸들러
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='rounded-3xl bg-white/60 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-xl md:p-6'
    >
      {/* 상단 영역 */}
      <div className='mb-4 flex items-center justify-between'>
        {/* 프로필 */}
        <div className='flex items-center space-x-3'>
          <Image
            src={post.author.profileImage}
            alt={post.author.name}
            width={48}
            height={48}
            className='rounded-full'
          />
          <div>
            <div className='flex items-center space-x-2'>
              {/* 작성자 이름 */}
              <h3 className='text-14b text-text-primary md:text-16b'>
                {post.author.name}
              </h3>
              {/* 인증 표시 */}
              {post.author.verified && (
                <p className='flex h-3 w-3 items-center justify-center rounded-full bg-blue-base md:h-4 md:w-4'>
                  <Check
                    size={8}
                    className='text-white'
                    strokeWidth={3}
                  />
                </p>
              )}
            </div>
            {/* 업로드 시간 */}
            <p className='text-12r text-text-light md:text-14r'>
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>
        {/* 도트메뉴 (본인 글일 때만) */}
        <div className='relative flex items-center space-x-2'>
          {post.author.id === user.currentUser.id && (
            <div
              ref={menuRef}
              className='relative'
            >
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className='rounded-full p-1 hover:bg-bg-extraSoft'
              >
                <MoreVertical
                  size={18}
                  className='text-text-light'
                />
              </button>

              {menuOpen && (
                <div className='absolute right-0 top-8 w-28 rounded-lg border bg-white shadow-sm'>
                  <button
                    onClick={onDelete}
                    className='block w-full px-4 py-2 text-left text-12m text-red-500 hover:bg-red-light md:text-14m'
                  >
                    삭제하기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='mb-4'>
        <div className='mb-4'>
          <p className='mb-2 text-12r leading-relaxed text-text-primary md:text-16r'>
            {content}
          </p>
          {tags}
        </div>
        {post.images && post.images.length > 0 && (
          <div
            className='group relative'
            {...swipeHandlers}
          >
            <div className='overflow-hidden rounded-2xl'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {post.images.map((image, idx) => (
                  <div
                    key={idx}
                    className='relative aspect-square min-w-full'
                  >
                    <Image
                      src={image}
                      alt=''
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 672px'
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 좌우 화살표 (md 이상, hover 시만 표시) */}
            {post.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className='absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white md:group-hover:block'
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className='absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/40 p-2 text-white md:group-hover:block'
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Page */}
            <div className='absolute bottom-2 right-[45%] flex items-center justify-center rounded-full bg-black/30 px-3 py-1.5'>
              <span className='text-10r text-white md:text-12r'>
                {currentIndex + 1} / {Math.min(post.images.length, 4)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className='flex flex-row items-center justify-between border-t border-border pt-2 md:pt-4'>
        {/* 카테고리 */}
        {(() => {
          const category = mockCategories.find(
            (c) => c.name === post.categoryName,
          );
          const IconComponent =
            mockCategoriesIcons[
              post.categoryName as keyof typeof mockCategoriesIcons
            ];
          if (!category || !IconComponent) return null;
          return (
            <div
              className={`inline-flex items-center space-x-1 rounded-full px-2.5 py-1 text-text-primary opacity-60 ${category.color} ring-1 ${category.activeColor}`}
            >
              <IconComponent size={14} />
              <span className='text-10r md:text-12r'>{category.name}</span>
            </div>
          );
        })()}

        {/* Action Buttons */}
        <div className='flex gap-3 md:gap-4'>
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 rounded-full transition-all md:space-x-2 ${
              isLiked
                ? 'text-red-base'
                : 'text-text-light hover:bg-bg-extraSoft'
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

          <button
            onClick={toggleComments}
            className='flex items-center space-x-1 rounded-full text-text-light transition-colors hover:bg-bg-extraSoft md:space-x-2'
          >
            <MessageCircle
              size={16}
              className={`md:h-[18px] md:w-[18px]`}
            />
            <span className='text-14m md:text-16m'>
              {post.commentList.length}
            </span>
          </button>

          <button
            onClick={handleRetweet}
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
      </div>
      {/* 댓글 영역 */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='mt-4 border-t border-border pt-4'
          >
            <div className='space-y-3'>
              {post.commentList
                .slice(0, visibleComments)
                .map((comment, index) => (
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

            {/* 더 보기 버튼 */}
            {visibleComments < post.commentList.length && (
              <button
                onClick={() => setVisibleComments(post.commentList.length)}
                className='mt-3 w-full text-12m text-purple-base hover:underline md:text-14m'
              >
                댓글 더 보기 ({post.commentList.length - visibleComments}개)
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
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PostCard;
