import { useEffect, useState } from "react";

const WelcomeSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const startShrink = 50;
      const endShrink = 300;
      const totalShrinkDistance = endShrink - startShrink;

      let progress = 0;
      if (scrollPosition > startShrink && scrollPosition < endShrink) {
        progress = (scrollPosition - startShrink) / totalShrinkDistance;
      } else if (scrollPosition >= endShrink) {
        progress = 1;
      } else {
        progress = 0;
      }
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialHeight = 100;
  const shrunkHeight = 10;
  const heightDifference = initialHeight - shrunkHeight;
  const currentHeight = `${
    initialHeight - heightDifference * scrollProgress
  }vh`;

  const initialFontSize = 3;
  const shrunkFontSize = 1.5;
  const fontSizeDifference = initialFontSize - shrunkFontSize;
  const currentFontSize = `${
    initialFontSize - fontSizeDifference * scrollProgress
  }em`;

  return (
    <div
      id="welcome-section"
      // style={{ height: currentHeight, fontSize: currentFontSize }}
    >
      <h1>Welcome</h1>

            <a href="#main-content" class="scroll">
        <div class="scroll__icon click"></div>
      </a>
    </div>
  );
};

export default WelcomeSection;
