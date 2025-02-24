import { useEffect } from 'react';

const useOutsideClick = (ref: React.RefObject<HTMLElement | null>, callback: () => void, ignoreRef?: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!ignoreRef || (ignoreRef.current && !ignoreRef.current.contains(event.target as Node)))
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
};

export default useOutsideClick;
