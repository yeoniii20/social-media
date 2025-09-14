interface IconBtnProps {
  text: string;
  icon: React.ElementType;
  onClick: () => void;
}

const IconBtn = ({ text, icon: Icon, onClick }: IconBtnProps) => {
  return (
    <button
      type='button'
      className='flex items-center space-x-2 text-text-light transition-colors hover:text-text-primary'
      onClick={onClick}
    >
      <Icon
        size={18}
        className='md:h-5 md:w-5'
      />
      <span className='text-14m md:text-16m'>{text}</span>
    </button>
  );
};

export default IconBtn;
