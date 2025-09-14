import React, { useState, ChangeEvent } from 'react';
import { Image as ImageIcon, Send, X } from 'lucide-react';
import Image from 'next/image';
import { CreatePostData } from '@/app/types/post';
import { usePostStore } from '@/app/store/usePostStore';
import { mockCategories, mockCategoriesIcons } from '@/app/data/mock/category';
import Alert from '../alert/alert';

const MAX_CHAR = 280;
const MAX_IMAGES = 4;

const CreatePostCard = () => {
  const [postContent, setPostContent] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(
    mockCategories[0].id,
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const addPost = usePostStore((state) => state.addPost);

  // 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postContent.trim() && images.length === 0) return;

    setLoading(true);
    try {
      const imageUrls = images.map((file) => URL.createObjectURL(file));

      const postData: CreatePostData = {
        content: postContent,
        images: imageUrls,
        category: selectedCategory,
      };

      addPost(postData);

      // 제출 후 초기화
      setPostContent('');
      setImages([]);
      setSelectedCategory(mockCategories[0].id);
      setShowAlert(true);
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setLoading(false);
    }
  };

  // 이미지 첨부 핸들러
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    const total = [...images, ...newFiles].slice(0, MAX_IMAGES);
    setImages(total);
    e.target.value = '';
  };

  // 이미지 삭제 핸들러
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // 모드 변경 (친구공개/전체공개)
  const changeRange = () => setMode(!mode);

  return (
    <div className='rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-sm'>
      <form onSubmit={handleSubmit}>
        {/* content 입력 칸 */}
        <div className='flex items-start space-x-4'>
          <div className='relative flex-1'>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              maxLength={MAX_CHAR}
              placeholder='Share something'
              className='w-full resize-none bg-transparent text-14r text-text-secondary placeholder-text-light focus:outline-none md:text-16r'
              rows={15}
            />
            {/* 글자 수 표시 */}
            <span className='absolute bottom-1 right-2 text-12r text-text-light'>
              {postContent.length}/{MAX_CHAR}
            </span>
          </div>
        </div>

        {/* 카테고리 선택 */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {mockCategories.map((cat) => {
            const Icon = mockCategoriesIcons[cat.name];
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                type='button'
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1 rounded-full px-3 py-1 text-12m text-text-secondary transition md:text-14m ${
                  isSelected
                    ? `${cat.color} ring-2 ${cat.activeColor}`
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* 첨부 이미지 미리보기 */}
        {images.length > 0 && (
          <div className='mt-4 grid grid-cols-4 gap-2'>
            {images.map((file, index) => {
              const imageUrl = URL.createObjectURL(file);
              return (
                <div
                  key={index}
                  className='relative aspect-square overflow-hidden rounded-lg border'
                >
                  <Image
                    src={imageUrl}
                    alt={`upload-${index}`}
                    fill
                    className='object-cover'
                  />
                  <button
                    type='button'
                    onClick={() => removeImage(index)}
                    className='absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white hover:bg-black/80'
                  >
                    <X size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* 하단 영역 */}
        <div className='mt-4 flex items-center justify-between border-t border-border pt-4'>
          <div className='flex items-center space-x-4'>
            {/* 이미지 업로드 버튼 (4장이면 비활성화) */}
            <label
              className={`flex cursor-pointer items-center space-x-2 ${
                images.length >= MAX_IMAGES
                  ? 'cursor-not-allowed text-text-light opacity-50'
                  : 'text-text-light hover:text-gray-800'
              }`}
            >
              <ImageIcon size={18} />
              <span className='text-14m md:text-16m'>Image</span>
              <input
                type='file'
                accept='image/*'
                multiple
                hidden
                disabled={images.length >= MAX_IMAGES}
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* 제출 버튼 */}
          <button
            type='submit'
            disabled={loading || (!postContent.trim() && images.length === 0)}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-14m transition-all md:px-5 md:text-16m ${
              postContent.trim() || images.length > 0
                ? 'bg-bg-enable text-white hover:bg-bg-hover active:bg-bg-active'
                : 'bg-bg-soft text-text-light'
            }`}
          >
            {loading ? (
              <p>Posting...</p>
            ) : (
              <>
                <Send
                  size={18}
                  className='md:h-5 md:w-5'
                />
                Post
              </>
            )}
          </button>
        </div>
      </form>

      {/* Alert 띄우기 */}
      {showAlert && <Alert message='포스팅 완료!' />}
    </div>
  );
};

export default CreatePostCard;
