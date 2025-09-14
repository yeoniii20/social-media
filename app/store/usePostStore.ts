import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Post, CreatePostData } from '@/app/types/post';
import { mockCategories } from '@/app/data/mock/category';
import { useUserStore } from './useUserStore';

interface PostState {
  newPosts: Post[];
  addPost: (postData: CreatePostData) => void;
  toggleLike: (postId: string) => void;
  toggleRetweet: (postId: string) => void;
  clearNewPosts: () => void;
}

export const usePostStore = create<PostState>()(
  persist(
    (set, get) => ({
      newPosts: [],

      // 새 글 등록
      addPost: (postData: CreatePostData) => {
        const { newPosts } = get();
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

        set({ newPosts: [newPost, ...newPosts] });
      },
      // 좋아요
      toggleLike: (postId: string) => {
        set({
          newPosts: get().newPosts.map((p) =>
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
          newPosts: get().newPosts.map((p) =>
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

      clearNewPosts: () => set({ newPosts: [] }),
    }),
    { name: 'new-post-storage' },
  ),
);
