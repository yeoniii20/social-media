import { Search } from 'lucide-react';

const Searchbar = () => {
  return (
    <div className='flex-shrink-0'>
      <div className='mb-6 w-full md:mb-8'>
        <div className='relative'>
          <Search
            size={18}
            className='absolute left-3 top-1/2 -translate-y-1/2 transform text-text-menu'
          />
          <input
            type='text'
            placeholder='Search...'
            className='w-full rounded-full bg-bg-extralight py-2 pl-10 pr-4 text-12r shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-base md:text-14r'
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
