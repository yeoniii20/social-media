'use client';

import React from 'react';
import SuggestionList from '../list/suggestionList';

const RightSidebar = () => {
  return (
    <div className='h-screen w-80 overflow-y-auto border-l border-border p-6 backdrop-blur-md no-scrollbar'>
      <SuggestionList />
    </div>
  );
};

export default RightSidebar;
