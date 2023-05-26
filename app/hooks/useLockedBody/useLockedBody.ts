import { useEffect, useState } from 'react';

const useLockedBody = (
  initialLocked: boolean = false
): [boolean, (locked: boolean) => void] => {
  const [isLocked, setIsLocked] = useState(initialLocked);

  useEffect(() => {
    if (isLocked !== initialLocked) {
      setIsLocked(initialLocked);
    }
  }, [isLocked,initialLocked]);

  useEffect(() => {
    if (!isLocked) return;

    const scrollBarWidth =
      document.body.offsetWidth - document.body.scrollWidth;
    const originalPaddingRight = document.body.style.paddingRight;
    const originialOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originialOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [isLocked]);

  return [isLocked, setIsLocked];
};

export default useLockedBody;
