import { Music, Palette, BookOpen, Film, Utensils } from 'lucide-react';

export const mockCategories = [
  {
    id: 1,
    name: '요리',
    color: 'bg-blue-200',
    activeColor: 'ring-blue-400',
  },
  {
    id: 2,
    name: '그림',
    color: 'bg-pink-200',
    activeColor: 'ring-pink-400',
  },
  {
    id: 3,
    name: '음악',
    color: 'bg-orange-200',
    activeColor: 'ring-orange-400',
  },
  {
    id: 4,
    name: '영화',
    color: 'bg-green-200',
    activeColor: 'ring-green-400',
  },
  {
    id: 5,
    name: '독서',
    color: 'bg-purple-200',
    activeColor: 'ring-purple-400',
  },
];

export const mockCategoriesIcons = {
  요리: Utensils,
  그림: Palette,
  음악: Music,
  영화: Film,
  독서: BookOpen,
};
