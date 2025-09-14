import React, { useState, useEffect } from 'react';

interface AlertProps {
  message: string;
  duration?: number;
}

const Alert = ({ message, duration = 3000 }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className='text-sub2 text-body3_m md:text-mobile_body3_sb fixed bottom-1/2 left-1/2 z-50 -translate-x-1/2 transform rounded-md bg-black/50 px-3 py-2 backdrop-blur-sm'>
      {message}
    </div>
  );
};

export default Alert;
