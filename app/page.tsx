import Feed from './(home)/contents/feed';
import { getPosts } from './api/post';
import { mockPosts } from './data/mock/post';

export default async function HomePage() {
  // 첫 페이지, 10개씩 로드
  const initialPosts = await getPosts({ page: 1, limit: 10 });
  // 10개보다 많아질 경우
  const hasMore = initialPosts.length === 10 && mockPosts.length > 10;

  return (
    <Feed
      initialPosts={initialPosts}
      initialHasMore={hasMore}
    />
  );
}
