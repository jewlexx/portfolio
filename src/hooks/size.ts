import { useEffect, useState } from 'react';

export const usePageSize = (): {
  width: number;
  height: number;
} => {
  const [innerSize, setInnersize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setInnersize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return innerSize;
};
