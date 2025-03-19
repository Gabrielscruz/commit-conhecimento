import { useRef } from 'react';

export interface UseDebounceProps {
  debouncedFn: (fn: (...args: any) => any, delay: number) => void;
}

export default function useDebounce(): UseDebounceProps {
  const timeoutRef = useRef<any>(null);

  function debouncedFn(fn: (...args: any) => any, delay: number) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn();
    }, delay);
  }

  return {
    debouncedFn,
  };
}