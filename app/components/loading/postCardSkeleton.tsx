import React from 'react';

interface PostCardSkeletonProps {
  showImage?: boolean;
  showComments?: boolean;
}

/**
 * PostCardSkeleton 컴포넌트
 *
 * @param showImage - 이미지 스켈레톤을 표시할지 여부 (true면 이미지 영역 표시)
 * @param showComments - 댓글 스켈레톤을 표시할지 여부 (true면 댓글 영역 표시)
 * @returns 스켈레톤 UI를 렌더링하는 컴포넌트
 */

const PostCardSkeleton = ({
  showImage = true,
  showComments = false,
}: PostCardSkeletonProps) => {
  return (
    <div className='animate-pulse rounded-3xl bg-white/40 p-4 shadow-md backdrop-blur-md md:p-6'>
      {/* 상단 영역 - 프로필 */}
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          {/* 프로필 이미지 */}
          <div className='h-12 w-12 rounded-full bg-bg-hard' />
          <div className='space-y-2'>
            {/* 작성자 이름 */}
            <div className='h-4 w-20 rounded bg-bg-light md:w-24' />
            {/* 업로드 시간 */}
            <div className='h-3 w-16 rounded bg-gray-100' />
          </div>
        </div>
      </div>

      {/* Content 영역 */}
      <div className='mb-4 space-y-3'>
        {/* 텍스트 콘텐츠 */}
        <div className='space-y-2'>
          <div className='h-4 w-full rounded bg-bg-light' />
          <div className='h-4 w-3/4 rounded bg-bg-light' />
        </div>

        {/* 해시태그 */}
        <div className='flex space-x-2'>
          <div className='h-5 w-16 rounded-full bg-purple-light' />
          <div className='h-5 w-20 rounded-full bg-purple-light' />
          <div className='h-5 w-14 rounded-full bg-purple-light' />
        </div>

        {/* 이미지 영역 */}
        {showImage && (
          <div className='relative'>
            <div className='aspect-square w-full rounded-2xl bg-bg-light' />
            {/* 페이지 인디케이터 */}
            <div className='absolute bottom-2 right-[45%] h-6 w-12 rounded-full bg-black/30' />
          </div>
        )}
      </div>

      {/* 하단 영역 */}
      <div className='flex flex-row items-center justify-between border-t border-border pt-2 md:pt-4'>
        {/* 카테고리 */}
        <div className='h-6 w-20 rounded-full bg-bg-hard' />

        {/* Action Buttons */}
        <div className='flex gap-3 md:gap-4'>
          {/* 좋아요 버튼 */}
          <div className='flex items-center space-x-1'>
            <div className='h-4 w-4 rounded bg-bg-light' />
            <div className='h-4 w-6 rounded bg-bg-light' />
          </div>

          {/* 댓글 버튼 */}
          <div className='flex items-center space-x-1'>
            <div className='h-4 w-4 rounded bg-bg-light' />
            <div className='h-4 w-4 rounded bg-bg-light' />
          </div>

          {/* 리트윗 버튼 */}
          <div className='flex items-center space-x-1'>
            <div className='h-4 w-4 rounded bg-bg-light' />
            <div className='h-4 w-6 rounded bg-bg-light' />
          </div>
        </div>
      </div>

      {/* 댓글 영역 */}
      {showComments && (
        <div className='mt-4 border-t border-border pt-4'>
          <div className='space-y-3'>
            {/* 댓글 */}
            <div className='flex items-start space-x-3'>
              <div className='h-10 w-10 flex-shrink-0 rounded-full bg-bg-light' />
              <div className='flex-1 space-y-2'>
                <div className='space-y-2 rounded-2xl bg-gray-100 p-3'>
                  <div className='flex items-center space-x-2'>
                    <div className='h-3 w-16 rounded bg-bg-light' />
                    <div className='h-3 w-12 rounded bg-gray-200' />
                  </div>
                  <div className='h-4 w-full rounded bg-bg-light' />
                  <div className='h-4 w-2/3 rounded bg-bg-light' />
                </div>
              </div>
            </div>
          </div>

          {/* 댓글 작성 영역 */}
          <div className='mt-4 flex items-center space-x-3'>
            <div className='h-8 w-8 flex-shrink-0 rounded-full bg-bg-light' />
            <div className='h-10 flex-1 rounded-full bg-gray-100' />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCardSkeleton;
