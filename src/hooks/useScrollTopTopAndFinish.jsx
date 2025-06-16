// hooks/useScrollToTopAndFinish.js
import { useRef, useCallback, useEffect } from 'react';

const useScrollToTopAndFinish = () => {
  const scrollTimeoutRef = useRef(null);
  const resolvePromiseRef = useRef(null);
  const handleScrollRef = useRef(null); 

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      if (handleScrollRef.current) {
        window.removeEventListener("scroll", handleScrollRef.current);
        handleScrollRef.current = null;
      }
    };
  }, []);

  const scrollToTop = useCallback(() => {

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    if (handleScrollRef.current) {
      window.removeEventListener("scroll", handleScrollRef.current);
      handleScrollRef.current = null;
    }
    if (resolvePromiseRef.current) {
      console.warn("[useScrollToTop] Previous promise was pending, resolving it now to avoid stale state.");
      resolvePromiseRef.current(); 
      resolvePromiseRef.current = null;
    }

    return new Promise((resolve) => {
      resolvePromiseRef.current = resolve; 

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

     
      let lastDetectedScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const currentHandleScroll = () => {
        const newScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (newScrollPosition === 0) {
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                const finalScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                if (finalScrollPosition === 0) {
                    window.removeEventListener("scroll", handleScrollRef.current);
                    handleScrollRef.current = null;
                    if (resolvePromiseRef.current) {
                        resolvePromiseRef.current();
                        resolvePromiseRef.current = null;
                    }
                }
            }, 50); 
        } else {
            clearTimeout(scrollTimeoutRef.current);
            lastDetectedScrollTop = newScrollPosition; 
        }
      };

      handleScrollRef.current = currentHandleScroll;
      window.addEventListener("scroll", handleScrollRef.current);

      const fallbackTimeoutId = setTimeout(() => {
        if (window.pageYOffset === 0) {
          if (resolvePromiseRef.current) {
            if (handleScrollRef.current) {
              window.removeEventListener("scroll", handleScrollRef.current);
              handleScrollRef.current = null;
            }
            resolvePromiseRef.current();
            resolvePromiseRef.current = null;
          }
        } 
        if (scrollTimeoutRef.current) { 
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = null;
        }
      }, 300);
    });
  }, []);

  return scrollToTop;
};

export default useScrollToTopAndFinish;