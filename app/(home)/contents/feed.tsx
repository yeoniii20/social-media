'use client';

import React, { useCallback, useEffect, useState, useTransition } from 'react';
import PostCard from '@/app/components/card/postCard';
import { getMorePosts } from '@/app/api/post';
import { Post } from '@/app/types/post';
import { usePostStore } from '@/app/store/usePostStore';
import LoadingDots from '@/app/components/loading/lodaingDots';

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
  const posts = usePostStore((s) => s.posts);
  const setPosts = usePostStore((s) => s.setPosts);

  const [page, setPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [isPending, startTransition] = useTransition();

  // store가 비어있을 때만 초기 데이터 세팅
  useEffect(() => {
    if (usePostStore.persist.hasHydrated() && posts.length === 0) {
      setPosts(initialPosts);
    }
  }, [posts, initialPosts, setPosts]);

  const loadMorePosts = useCallback(() => {
    if (isPending || !hasMore) return;
    startTransition(async () => {
      const result = await getMorePosts(page);

      // append + id 기반 중복 방지
      setPosts([
        ...posts,
        ...result.posts.filter(
          (newPost) => !posts.some((p) => p.id === newPost.id),
        ),
      ]);

      setHasMore(result.hasMore);
      setPage((prev) => prev + 1);
    });
  }, [page, isPending, hasMore, posts, setPosts]);

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
        <div className='pb-10'>
          <LoadingDots />
        </div>
      )}

      {/* 더 이상 피드가 없을 경우 */}
      {!hasMore && (
        <div className='mt-8 text-center text-text-secondary'>No more</div>
      )}
    </div>
  );
};

export default Feed;
