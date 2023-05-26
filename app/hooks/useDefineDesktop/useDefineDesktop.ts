import { useEffect, useState } from 'react';

const useDefineDesktop = (width = 768) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}`);
    const listener = () => setIsDesktop(media.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [width]);

  return isDesktop;
};

export default useDefineDesktop;
