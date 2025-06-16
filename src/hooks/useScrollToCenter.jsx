import { useCallback, useEffect, useRef } from "react";
import useWindowWidth from "./useWindowWidth";

const MobileBreak = 768;

const useScrollToCenter = (shouldScroll) => {
  const elemRef = useRef(null);
  const width = useWindowWidth();
  const initialWidth =
    typeof window !== "undefined" ? window.innerWidth : MobileBreak + 1;

  const scrollToElement = useCallback(() => {
    const elem = elemRef.current;
    if (elem) {
      const rect = elem.getBoundingClientRect();

      let size = 0;
      const screenSizes = (size) => {

        if (width >= 1500) {
          size = 40;
        } else if (width >= 1300) {
          size = 10;
        } else if (width >= 1200) {
          size = 6.5;
        } else if (width >= 1024) {
          size = 4.2;
        } else if (width >= 768) {
          size = 4;
        } else {
          size = 4;
        }
        return size;
      };
      const yOffset =
        window.scrollY +
        rect.top -
        window.innerHeight / screenSizes(size) +
        rect.height / 2;
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
