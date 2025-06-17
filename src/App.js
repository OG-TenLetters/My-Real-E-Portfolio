import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import BackgroundImg from "./assets/BackgroundExample.png";
import Projects from "./components/Projects/Projects";
import useWindowWidth from "./hooks/useWindowWidth";
import ContactModal from "./components/ContactModal";
import TriangleBgAnimation from "./components/TriangleBgAnimation";
import useScrollToTopAndFinish from "./hooks/useScrollTopTopAndFinish";
import MailButton from "./components/MailButton";

const MobileBreak = 768;

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const width = useWindowWidth();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [nameInput, setNameInput] = useState('')
  const doScrollToTop = useScrollToTopAndFinish();
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const initialWidth =
      typeof window !== "undefined" ? window.innerWidth : MobileBreak + 1;
    return initialWidth > MobileBreak;
  });
  
  const getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; 
    outer.style.msOverflowStyle = 'scrollbar'; 
    document.body.appendChild(outer);
    
    
    const inner = document.createElement('div');
    outer.appendChild(inner);
    
    
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    
    outer.parentNode.removeChild(outer);
    
    return scrollbarWidth;
  };
  
  useEffect(() => {

      if (isResumeOpen | isContactOpen ) {
      document.body.classList.add("lockScroll");
            document.body.style.paddingRight = `${getScrollbarWidth()}px`;

    } else {
      document.body.classList.remove("lockScroll");
    }

    return () => {
      document.body.classList.remove("lockScroll");
      document.body.style.paddingRight = '0px';
    };
  }, [isResumeOpen | isContactOpen]);

  
  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  const toggleSidebar = () => {
    if (width <= MobileBreak) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const openContactModal = useCallback(async () => {
    setPageHidden(true);
    await doScrollToTop();
    setIsContactOpen(true);
  }, [doScrollToTop]);

  const closeContactModal = useCallback(() => {
    setPageHidden(false);
    setIsContactOpen(false);
  }, []);

  const closeSidebar = () => {
    if (width <= MobileBreak) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (width > MobileBreak) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [width]);

  return (
    <div className="App">
      <div className="App-bg">
        <TriangleBgAnimation />
        <ContactModal
        setNameInput={setNameInput}
          isContactOpen={isContactOpen}
           setIsContactOpen={setIsContactOpen}
          closeContactModal={closeContactModal}
          setIsContactSubmitted={setIsContactSubmitted}
        />
        <WelcomeSection 
        nameInput={nameInput}
        pageHidden={pageHidden}
          isContactOpen={isContactOpen}
          isContactSubmitted={isContactSubmitted}
        />
        <div className="content-wrapper">
          <MailButton openContactModal={openContactModal} />
          {isSidebarOpen && (
            <SideBar
              pageHidden={pageHidden}
              openContactModal={openContactModal}
              closeSidebar={closeSidebar}
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
            />
          )}

          <section id="main-content">
            <Main
              pageHidden={pageHidden}
              openContactModal={openContactModal}
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
              isResumeOpen={isResumeOpen}
            />
            <Projects pageHidden={pageHidden} />
          </section>
        </div>
        <Footer
          pageHidden={pageHidden}
          openContactModal={openContactModal}
          toggleResumeModal={toggleResumeModal}
        />
      </div>
    </div>
  );
}

export default App;
