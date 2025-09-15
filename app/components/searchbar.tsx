import { Search } from 'lucide-react';

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}

const Searchbar = ({ value, onChange }: SearchbarProps) => {
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
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='w-full rounded-full bg-bg-extralight py-2 pl-10 pr-4 text-12r text-text-primary shadow-sm transition-all placeholder:text-text-light focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-base md:text-14r'
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
