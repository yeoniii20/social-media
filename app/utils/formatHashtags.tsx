import React from 'react';

/**
 * 본문에서 해시태그와 글 분리하는 유틸
 * @param {string} text 본문
 * @returns
 */
export const formatHashtags = (text: string) => {
  const regex = /#[^\s#]+/g;
  const tags = text.match(regex) || [];

  const content = text.replace(regex, '').trim();

  return {
    content: <span>{content}</span>,
    tags: (
      <div className='mt-2 flex flex-wrap gap-2'>
        {tags.map((tag, i) => (
          <span
            key={`tag-${i}`}
            className='cursor-pointer text-12m text-purple-base hover:underline md:text-14m'
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  };
};
