import { ListRequest, Post, CreatePostData } from '@/app/types/post';
import { usePostStore } from '../store/usePostStore';
import { mockPosts } from '../data/mock/post';

/**
 * 포스트 가져오기
 * @param {ListRequest} request 불러올 페이지 수 / 개수
 * @returns
 */
export const getPosts = async (request: ListRequest): Promise<Post[]> => {
  const { page, limit } = request;
  await new Promise((resolve) => setTimeout(resolve, 200));

  const posts = usePostStore.getState().posts;
  return posts.slice((page - 1) * limit, page * limit);
};

/**
 * 추가 포스트 가져오기 (무한 스크롤 시 로딩처리 하기 위함)
 * @param {number} page 불러올 페이지 수
 * @param {number} limit 개수
 * @returns
 */
export const getMorePosts = async (page: number, limit = 10) => {
  const chunk = await getPosts({ page, limit });
  return { posts: chunk, hasMore: chunk.length === limit };
};

/**
 * 포스트 삭제
 * @param {string} postId 포스트 아이디
 * @returns
 */
export const deletePost = async (postId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  usePostStore.getState().deletePost(postId);
  return { success: true };
};


/**
 * 좋아요 토글
 * @param {string} postId 포스트 아이디
 * @returns
 */
export const toggleLike = async (postId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  usePostStore.getState().toggleLike(postId);
  return { success: true };
};

/**
 * 리트윗 토글
 * @param {string} postId 포스트 아이디
 * @returns
 */
export const toggleRetweet = async (postId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  usePostStore.getState().toggleRetweet(postId);
  return { success: true };
};

/**
 * 새 글 작성
 * @param {CreatePostData} postData 새 글 작성 데이터
 * @returns
 */
export const createPost = async (postData: CreatePostData): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  usePostStore.getState().addPost(postData);
  return usePostStore.getState().posts[0];
};
