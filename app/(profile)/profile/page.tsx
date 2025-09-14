'use client';

import Image from 'next/image';
import { useUserStore } from '@/app/store/useUserStore';
import { MY_POSTING } from '@/app/data/mock/myfeed';

const ProfilePage = () => {
  const user = useUserStore();

  return (
    <div className='mx-auto h-full w-full max-w-2xl overflow-y-auto px-4 py-6 no-scrollbar'>
      {/* 프로필 사진 */}
      <div className='mb-6 flex items-center space-x-4'>
        <Image
          src={user.currentUser.profileImage}
          alt={user.currentUser.name}
          width={64}
          height={64}
          className='rounded-full object-cover'
        />
        <div>
          <h2 className='text-16b text-text-primary'>
            {user.currentUser.name}
          </h2>
          <p className='text-14r text-text-light'>
            @{user.currentUser.nickname}
          </p>
        </div>
      </div>
      {/* 게시물/팔로워/팔로잉 */}
      <div className='mb-6 flex flex-row justify-evenly text-14b text-text-secondary md:mb-8 md:text-16b'>
        <p>게시물 4</p>
        <p>팔로워 568</p>
        <p>팔로잉 412</p>
      </div>
      {/* 피드 사진 */}
      <div className='grid grid-cols-3 gap-1 border-t border-border pt-1'>
        {MY_POSTING.map((item, i) => (
          <div
            key={i}
            className='relative aspect-[3/4]'
          >
            <Image
              src={item.img}
              alt='feed'
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
