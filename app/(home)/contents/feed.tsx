'use client';

import React, { useCallback, useEffect, useState, useTransition } from 'react';
import PostCard from '@/app/components/card/postCard';
import { getMorePosts } from '@/app/api/post';
import { Post } from '@/app/types/post';
import { usePostStore } from '@/app/store/usePostStore';
import LoadingDots from '@/app/components/loading/lodaingDots';

/**
 * 피드 컴포넌트
 * @returns 피드 페이지 렌더링
 */
const Feed = () => {
  const newPosts = usePostStore((s) => s.newPosts);
  const [mockPosts, setMockPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  // 초기 mockPosts 로드
  useEffect(() => {
    startTransition(async () => {
      const result = await getMorePosts(1, 10);
      setMockPosts(result.posts);
      setHasMore(result.hasMore);
      setPage(2);
    });
  }, []);

  // 무한 스크롤 로드 (mockPosts 전용)
  const loadMorePosts = useCallback(() => {
    if (isPending || !hasMore) return;
    startTransition(async () => {
      const result = await getMorePosts(page, 10);

      // append + id 중복 방지
      setMockPosts((prev) => [
        ...prev,
        ...result.posts.filter(
          (newPost) => !prev.some((p) => p.id === newPost.id),
        ),
      ]);

      setHasMore(result.hasMore);
      setPage((prev) => prev + 1);
    });
  }, [page, isPending, hasMore]);

  // 스크롤 핸들러
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMorePosts();
    }
  };

  return (
    <div
      className='mx-auto h-full w-full max-w-2xl overflow-y-auto px-4 py-6 no-scrollbar'
      onScroll={handleScroll}
    >
      <div className='space-y-4 md:space-y-6'>
        {/* 내가 작성한 글 */}
        {newPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}

        {/* mockPosts (페이징) */}
        {mockPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

      {isPending && (
        <div className='pb-10'>
          <LoadingDots />
        </div>
      )}

      {!hasMore && (
        <div className='mt-8 text-center text-text-secondary'>No more</div>
      )}
    </div>
  );
};

export default Feed;
