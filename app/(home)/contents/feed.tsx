'use client';

import React, { useState, useCallback, useTransition } from 'react';
import PostCard from '@/app/components/card/postCard';
import { getMorePosts } from '@/app/api/post';
import { Post } from '@/app/types/post';

interface FeedProps {
  initialPosts: Post[];
  initialHasMore: boolean;
}

/**
 * 피드 페이지
 * @param initialPosts 초기 포스팅
 * @param initialHasMore 초기 포스팅보다 개수 많음 여부
 * @returns
 */
const Feed = ({ initialPosts, initialHasMore }: FeedProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);

  const [isPending, startTransition] = useTransition();

  const loadMorePosts = useCallback(() => {
    if (isPending || !hasMore) return;
    startTransition(async () => {
      const result = await getMorePosts(page);
      setPosts((prev) => [...prev, ...result.posts]);
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
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>

      {/* 로딩 상태 */}
      {isPending && (
        <div className='mt-8 text-center text-text-secondary'>Loading...</div>
      )}

      {/* 더 이상 피드가 없을 경우 */}
      {!hasMore && (
        <div className='mt-8 text-center text-text-secondary'>No more</div>
      )}
    </div>
  );
};

export default Feed;
