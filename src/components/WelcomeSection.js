import { useEffect, useState } from "react";

const WelcomeSection = ({
  isContactOpen, isContactSubmitted, pageHidden, nameInput }) => {
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
      <div className={`welcome__text ${isContactOpen && "contact-modal--open"}`}>
        <h1
          style={{
        
            fontSize: `${isContactSubmitted && "24px"}`,
            width: `${isContactSubmitted && "80%"}`,
            textAlign: `${isContactSubmitted && "center"}`,
          }}
        >{`${pageHidden ? "" :
          isContactSubmitted && !isContactOpen
            ? `Thank you, ${nameInput}! I'm looking forward to speaking with you soon.`
            : "Welcome"
        }`}</h1>
        <a href="#main-content" className={`scroll ${isContactSubmitted && "hidden"}`}>
          <div className="scroll__icon click"></div>
        </a>
      </div>
    </div>
  );
};

export default WelcomeSection;
