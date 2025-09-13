import { StaticImageData } from 'next/image';

// 작성자 / 사용자
export interface Author {
  id?: number | string;
  name: string;
  nickname: string;
  profileImage: string | StaticImageData;
  verified: boolean;
}

// 댓글
export interface Comment {
  author: Author;
  content?: string;
  createdAt: string;
  likes: number;
  isLiked?: boolean;
}

// 카테고리
export interface Category {
  id: number;
  name: string;
}

// 게시글
export interface Post {
  id: number;
  author: Author;
  content: string;
  images: string[];
  category: number;
  categoryName: string;
  createdAt: string;
  likes: number;
  retweets: number;
  comments: number;
  isLiked: boolean;
  isRetweeted: boolean;
  hasMoreComments: boolean;
  commentList: Comment[];
}

// 새 글 작성
export interface CreatePostData {
  content: string;
  images?: string[];
  category: number;
}

// 페이징 요청
export interface ListRequest {
  page: number;
  limit: number;
}
