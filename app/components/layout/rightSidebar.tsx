'use client';

import React from 'react';
import SuggestionList from '../list/suggestionList';
import CategoryList from '../list/categoryList';

const RightSidebar = () => {
  return (
    <div className='h-screen w-80 overflow-y-auto border-l border-border p-6 backdrop-blur-md no-scrollbar'>
      <h2 className='mb-4 mt-1 text-18b text-text-primary'>친구 추천</h2>
      <div className='flex flex-col gap-12'>
        <SuggestionList />
        {/* <CategoryList /> */}
      </div>
    </div>
  );
};

export default RightSidebar;
