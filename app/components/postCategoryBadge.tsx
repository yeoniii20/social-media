import React from 'react';
import { mockCategories, mockCategoriesIcons } from '@/app/data/mock/category';

interface PostCategoryBadgeProps {
  categoryName: string;
}

/**
 * 게시물 카테고리 뱃지 컴포넌트
 *
 * @param {string} categoryName - 카테고리 이름
 * @returns {JSX.Element | null} 카테고리 뱃지 (없으면 null)
 */
const PostCategoryBadge = ({ categoryName }: PostCategoryBadgeProps) => {
  const category = mockCategories.find((c) => c.name === categoryName);
  const IconComponent =
    mockCategoriesIcons[categoryName as keyof typeof mockCategoriesIcons];

  if (!category || !IconComponent) return null;

  return (
    <div
      className={`inline-flex items-center space-x-1 rounded-full px-2.5 py-1 text-text-primary opacity-60 ${category.color} ring-1 ${category.activeColor}`}
    >
      <IconComponent size={14} />
      <span className='text-10r md:text-12r'>{category.name}</span>
    </div>
  );
};

export default PostCategoryBadge;
