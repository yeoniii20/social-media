import { mockCategories } from '@/app/data/mock/category';
import { mockPosts } from '@/app/data/mock/post';
import { ListRequest, Post, CreatePostData } from '@/app/types/post';
import { currentUser } from '../data/mock/user';

/**
 * 포스트 가져오기
 * @param {ListRequest} request 불러올 페이지 수 / 개수
 * @returns
 */
export const getPosts = async (request: ListRequest): Promise<Post[]> => {
  const { page, limit } = request;

  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockPosts.slice((page - 1) * limit, page * limit);
};

/**
 * 추가 포스트 가져오기 (무한 스크롤 시 로딩처리 하기 위함)
 * @param {number} page 불러올 페이지 수
 * @param {number} limit 개수
 * @returns
 */
export const getMorePosts = async (page: number, limit = 10) => {
  const posts = await getPosts({ page, limit });
  const hasMore = posts.length === limit;
  return { posts, hasMore };
};

/**
 * 좋아요 토글
 * @param {number} postId 포스트 아이디
 * @returns
 */
export const toggleLike = async (postId: number) => {
  // 5초 loading
  await new Promise((resolve) => setTimeout(resolve, 500));

  const postIndex = mockPosts.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    const post = mockPosts[postIndex];
    post.isLiked = !post.isLiked;
    post.likes = post.isLiked ? post.likes + 1 : post.likes - 1;
  }

  return { success: true };
};

/**
 * 리트윗 토글
 * @param {number} postId 포스트 아이디
 * @returns
 */
export const toggleRetweet = async (postId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const postIndex = mockPosts.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    const post = mockPosts[postIndex];
    post.isRetweeted = !post.isRetweeted;
    post.retweets = post.isRetweeted ? post.retweets + 1 : post.retweets - 1;
  }

  return { success: true };
};

/**
 * 새 글 작성
 * @param {CreatePostData} postData 새 글 작성 데이터
 * @returns
 */
export const createPost = async (postData: CreatePostData): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 모두 기본 값으로 세팅
  const newPost: Post = {
    id: Math.max(...mockPosts.map((p) => p.id)) + 1,
    author: {
      ...currentUser,
    },
    content: postData.content,
    images: postData.images || [],
    category: postData.category,
    categoryName:
      mockCategories.find((c) => c.id === postData.category)?.name || '기타',
    createdAt: new Date().toISOString(),
    likes: 0,
    retweets: 0,
    comments: 0,
    isLiked: false,
    isRetweeted: false,
    hasMoreComments: false,
    commentList: [],
  };

  mockPosts.unshift(newPost);
  return newPost;
};
