import { useEffect, useState, useRef, MutableRefObject } from 'react';

const useIntersectionObserver = (options = {}): [boolean, MutableRefObject<HTMLElement | null>] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [isVisible, ref];
};

export default useIntersectionObserver;
