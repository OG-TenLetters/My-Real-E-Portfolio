import { useCallback, useEffect, useRef } from "react";

const useScrollToCenter = (shouldScroll) => {
  const elemRef = useRef(null);

  const scrollToElement = useCallback(() => {
    const elem = elemRef.current;
    if (elem) {
      const rect = elem.getBoundingClientRect();

      const yOffset =
        window.scrollY + rect.top - window.innerHeight / 4 + rect.height / 2;
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (shouldScroll) {
      const timeoutId = setTimeout(() => {
        scrollToElement();
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [shouldScroll, scrollToElement]);
  return elemRef;
};

export default useScrollToCenter;