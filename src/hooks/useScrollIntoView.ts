import { RefObject, useEffect } from 'react';

export const useScrollIntoView = (ref: RefObject<null | HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [ref]);
};
