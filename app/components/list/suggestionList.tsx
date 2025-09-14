import { FRIENDS_SUGGESTION } from '@/app/data/mock/friends';
import Image from 'next/image';

const SuggestionList = () => {
  return (
    <div className='space-y-3'>
      {FRIENDS_SUGGESTION.map((user) => (
        <div
          key={user.id}
          className='flex items-center justify-between'
        >
          <div className='flex items-center space-x-3'>
            <Image
              src={user.profileImg}
              alt={user.name}
              width={40}
              height={40}
              className='h-10 w-10 rounded-full object-cover'
            />
            <div>
              <p className='text-12m text-text-primary md:text-14m'>
                {user.name}
              </p>
              <p className='text-10r text-text-light md:text-12r'>
                {user.mutual}
              </p>
            </div>
          </div>
          <button className='rounded-full bg-bg-enable px-4 py-1 text-12m text-white transition-colors hover:bg-bg-hover active:bg-bg-active'>
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default SuggestionList;
