'use client';

import CreatePostCard from '@/app/components/card/createPostCard';

const CreatePage = () => {
  return (
    <div className='mx-auto w-full max-w-2xl px-4 py-6'>
      {/* Create Post */}
      <div className='mb-6'>
        <CreatePostCard />
      </div>
    </div>
  );
};

export default CreatePage;
