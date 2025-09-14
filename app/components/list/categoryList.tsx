import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { mockCategories, mockCategoriesIcons } from '@/app/data/mock/category';

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setActiveCategory((prev) => (prev === name ? null : name));
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        {mockCategories.map((item) => {
          const IconComponent =
            mockCategoriesIcons[
              item.name as keyof typeof mockCategoriesIcons
            ] || Camera;
          const isActive = activeCategory === item.name;

          return (
            <div
              key={item.id}
              //   onClick={() => handleClick(item.name)}
              className={`cursor-pointer rounded-2xl p-3 text-center transition-transform hover:scale-105 ${item.color} ${
                isActive
                  ? `bg-opacity-80 shadow-lg ring-2 ${item.activeColor}`
                  : ''
              }`}
            >
              <div className='mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/30'>
                <IconComponent
                  size={16}
                  className={`text-text-secondary md:h-4 md:w-4`}
                />
              </div>
              <p className={`text-10m text-text-primary md:text-12m`}>
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
