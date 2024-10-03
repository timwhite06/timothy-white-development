'use client';
import { useEffect } from 'react';
import useAppStore from '../../data_stores/app_store';

const suppressWarning = (warningMessage) => {
  const originalWarn = console.warn;
  console.warn = (message, ...args) => {
    if (typeof message === 'string' && message.includes(warningMessage)) {
      return;
    }
    originalWarn(message, ...args);
  };

  return () => {
    console.warn = originalWarn;
  };
};

const Manager = () => {
  const setIsMobile = useAppStore((state) => state.setIsMobile);

  // do window width for is mobile
  useEffect(() => {
    if (window.innerWidth < 1800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const handleResize = () => {
      if (window.innerWidth < 1800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    const restoreWarn = suppressWarning('Image with src');

    return () => {
      window.removeEventListener('resize', handleResize);
      restoreWarn();
    };
  }, []);

  return;
};

export default Manager;
