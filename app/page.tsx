import Feed from './(home)/contents/feed';
import { getPosts } from './api/post';

export default async function HomePage() {
  const initialPosts = await getPosts({ page: 1, limit: 10 });

  return (
    <Feed
      initialPosts={initialPosts}
      initialHasMore={initialPosts.length === 10}
    />
  );
}
