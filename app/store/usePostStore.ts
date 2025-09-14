import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Post, CreatePostData } from '@/app/types/post';
import { mockCategories } from '@/app/data/mock/category';
import { mockPosts } from '../data/mock/post';
import { useUserStore } from './useUserStore';

interface PostState {
  posts: Post[];
  addPost: (postData: CreatePostData) => void;
  toggleLike: (postId: string) => void;
  toggleRetweet: (postId: string) => void;
  clearPosts: () => void;
}

export const usePostStore = create<PostState>()(
  persist(
    (set, get) => ({
      // 초기 값은 기존 mock data
      posts: mockPosts,

      // 새 글 등록
      addPost: (postData: CreatePostData) => {
        const { posts } = get();
        const currentUser = useUserStore.getState().currentUser;
        const newPost: Post = {
          id: crypto.randomUUID(),
          author: currentUser,
          content: postData.content,
          images: postData.images || [],
          category: postData.category,
          categoryName:
            mockCategories.find((c) => c.id === postData.category)?.name ||
            '기타',
          createdAt: new Date().toISOString(),
          likes: 0,
          retweets: 0,
          comments: 0,
          isLiked: false,
          isRetweeted: false,
          hasMoreComments: false,
          commentList: [],
        };

        set({ posts: [newPost, ...posts] });
      },

      // 좋아요
      toggleLike: (postId: string) => {
        set({
          posts: get().posts.map((p) =>
            p.id === postId
              ? {
                  ...p,
                  isLiked: !p.isLiked,
                  likes: p.isLiked ? p.likes - 1 : p.likes + 1,
                }
              : p,
          ),
        });
      },

      // 리트윗
      toggleRetweet: (postId: string) => {
        set({
          posts: get().posts.map((p) =>
            p.id === postId
              ? {
                  ...p,
                  isRetweeted: !p.isRetweeted,
                  retweets: p.isRetweeted ? p.retweets - 1 : p.retweets + 1,
                }
              : p,
          ),
        });
      },

      clearPosts: () => set({ posts: [] }),
    }),
    {
      name: 'post-storage',
    },
  ),
);
