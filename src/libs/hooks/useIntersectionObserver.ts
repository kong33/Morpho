import { useEffect, useState, useRef, MutableRefObject } from 'react';

const useIntersectionObserver = (options = {}): [boolean, MutableRefObject<HTMLElement | null>] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [isVisible, ref];
};

export default useIntersectionObserver;
