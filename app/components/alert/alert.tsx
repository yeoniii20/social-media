import React, { useState, useEffect } from 'react';

interface AlertProps {
  message: string;
  duration?: number;
}

const Alert = ({ message, duration = 2000 }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-1/2 left-1/2 z-50 -translate-x-1/2 transform rounded-md bg-black/50 px-5 py-2 text-12m text-text-extraSoft backdrop-blur-sm md:text-14m'>
      {message}
    </div>
  );
};

export default Alert;
