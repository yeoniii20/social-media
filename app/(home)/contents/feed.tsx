'use client';

import { deletePost, getMorePosts } from '@/app/api/post';
import PostCard from '@/app/components/card/postCard';
import LoadingDots from '@/app/components/loading/lodaingDots';
import ConfirmModal from '@/app/components/modal/confirmModal';
import { Post } from '@/app/types/post';
import { useState, useTransition, useEffect, useCallback } from 'react';

/**
 * 피드 컴포넌트
 * @returns 피드 페이지 렌더링
 */
const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  // 삭제 모달 상태
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // 초기 로드
  useEffect(() => {
    startTransition(async () => {
      const result = await getMorePosts(1, 10);
      setPosts(result.posts);
      setHasMore(result.hasMore);
      setPage(2);
    });
  }, []);

  // 무한 스크롤
  const loadMorePosts = useCallback(() => {
    if (isPending || !hasMore) return;
    startTransition(async () => {
      const result = await getMorePosts(page, 10);

      setPosts((prev) => [
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

  // 삭제 실행
  const handleDelete = async () => {
    if (!selectedPost) return;
    await deletePost(selectedPost.id);
    setPosts((prev) => prev.filter((p) => p.id !== selectedPost.id));
    setShowConfirm(false);
    setSelectedPost(null);
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
            onDelete={() => {
              setSelectedPost(post);
              setShowConfirm(true);
            }}
          />
        ))}
      </div>

      {isPending && (
        <div className='pb-10'>
          <LoadingDots />
        </div>
      )}

      {!hasMore && (
        <p className='mt-8 text-center text-12m text-text-light md:text-14m'>
          마지막 게시물입니다.
        </p>
      )}

      {/* 삭제 모달 */}
      <ConfirmModal
        isOpen={showConfirm}
        message='이 포스트를 삭제하시겠습니까?'
        confirmText='삭제'
        cancelText='취소'
        onConfirm={handleDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
};

export default Feed;
