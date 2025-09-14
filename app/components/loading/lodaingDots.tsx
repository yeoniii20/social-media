import React from 'react';

const LoadingDots = () => {
  return (
    <div className='flex items-center justify-center space-x-2 py-5'>
      <span className='animate-bounce-delay-0 h-2 w-2 rounded-full bg-purple-base md:h-3 md:w-3' />
      <span className='animate-bounce-delay-1 h-2 w-2 rounded-full bg-purple-400/80 md:h-3 md:w-3' />
      <span className='animate-bounce-delay-2 h-2 w-2 rounded-full bg-purple-200 md:h-3 md:w-3' />
    </div>
  );
};

export default LoadingDots;
