import PostCardSkeleton from './postCardSkeleton';

/**
 * 여러 개의 PostCardSkeleton을 렌더링하는 리스트 컴포넌트
 *
 * @param count - 생성할 스켈레톤 카드의 개수 (기본값: 2)
 * @returns 지정한 개수만큼의 PostCardSkeleton 리스트를 렌더링
 */
const PostCardSkeletonList = ({ count = 2 }: { count?: number }) => {
  const skeletonItems = Array.from({ length: count }, (_, index) => ({
    id: index,
    showImage: index % 2 === 0,
    showComments: index % 3 === 0,
  }));

  return (
    <div className='space-y-4 md:space-y-6'>
      {skeletonItems.map((item) => (
        <PostCardSkeleton
          key={item.id}
          showImage={item.showImage}
          showComments={item.showComments}
        />
      ))}
    </div>
  );
};

export default PostCardSkeletonList;
