import Feed from './(home)/contents/feed';
import { getPosts } from './api/post';
import { usePostStore } from './store/usePostStore';
export default async function HomePage() {
  // 첫 페이지, 10개씩 로드
  const initialPosts = await getPosts({ page: 1, limit: 10 });

  const allPosts = usePostStore.getState().posts;
  const hasMore = initialPosts.length === 10 && allPosts.length > 10;

  return (
    <Feed
      initialPosts={initialPosts}
      initialHasMore={hasMore}
    />
  );
}
