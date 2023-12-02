import { RefObject, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useRemoveNewTodoParam = (ref: RefObject<null | HTMLLIElement>) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current) return;

      const current = new URLSearchParams(Array.from(searchParams.entries()));

      current.delete('newId');

      const search = current.toString();
      const query = search ? `?${search}` : '';

      router.replace(`/${query}`, { scroll: false });
    };

    window.addEventListener('mousedown', handleOutSideClick);
    return () => window.removeEventListener('mousedown', handleOutSideClick);
  }, [ref, router, searchParams]);
};
