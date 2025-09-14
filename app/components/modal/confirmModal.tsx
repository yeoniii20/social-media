import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * 확인 모달
 * @param {boolean} isOpen 열림 상태
 * @param {string} message 메세지 텍스트
 * @param {string} confirmText 확인 버튼 텍스트
 * @param {string} cancelText 취소 버튼 텍스트
 * @param onConfirm 확인 핸들러
 * @param onCancel 취소 핸들러
 * @returns
 */
const ConfirmModal = ({
  isOpen,
  message = '정말 삭제하시겠습니까?',
  confirmText = '예',
  cancelText = '아니오',
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='w-72 rounded-2xl bg-white p-6 shadow-lg md:w-80'>
        <h3 className='mb-4 text-center text-14b text-text-primary md:text-16b'>
          {message}
        </h3>
        <div className='flex justify-between gap-3'>
          <button
            onClick={onCancel}
            className='flex-1 rounded-lg border px-4 py-2 text-12m text-text-secondary hover:bg-gray-100 md:text-14m'
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className='flex-1 rounded-lg bg-red-500 px-4 py-2 text-12m text-white hover:bg-red-light md:text-14m'
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
