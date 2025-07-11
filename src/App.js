import { useCallback, useEffect, useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import Projects from "./components/Projects/Projects";
import useWindowWidth from "./hooks/useWindowWidth";
import ContactModal from "./components/ContactModal";
import TriangleBgAnimation from "./components/TriangleBgAnimation";
import useScrollToTopAndFinish from "./hooks/useScrollToTopAndFinish";
import MailButton from "./components/MailButton";

const MobileBreak = 768;

function App() {
  const [isProjectOpen, setisProjectOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shiftMailBtn, setShiftMailBtn] = useState(false);
  const doScrollToTop = useScrollToTopAndFinish();
  const width = useWindowWidth();

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

  const getScrollbarWidth = () => {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    outer.style.msOverflowStyle = "scrollbar";
    document.body.appendChild(outer);

    const inner = document.createElement("div");
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  };

  const mobileSidebar = isSidebarOpen && width < MobileBreak;

  useEffect(() => {
    if (isResumeOpen | isContactOpen | mobileSidebar) {
      document.body.classList.add("lockScroll");
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      document.body.classList.remove("lockScroll");
    }

    return () => {
      document.body.classList.remove("lockScroll");
      document.body.style.paddingRight = "0px";
    };
  }, [isResumeOpen, isContactOpen, mobileSidebar]);

  useEffect(() => {
    if (width > MobileBreak) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [width]);

  useEffect(() => {
    const scrollToMain = () => {
      setTimeout(() => {
        if (window.pageYOffset <= 100) {
          window.scrollTo({
            top: window.innerHeight + 120,
            behavior: "smooth",
          });
        }
      });
    };

    const timer = setTimeout(scrollToMain, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const bottomOfPageEffect = () => {
      const scrollTop = window.scrollY;

      const windowHeight = window.innerHeight;

      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight && width <= MobileBreak) {
        setShiftMailBtn(true);
      } else {
        setShiftMailBtn(false);
      }
    };
    window.addEventListener("scroll", bottomOfPageEffect);
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
          <MailButton
            openModals={isContactOpen | isResumeOpen | isProjectOpen}
            getScrollbarWidth={getScrollbarWidth}
            openContactModal={openContactModal}
            shiftMailBtn={shiftMailBtn}
            mobileSidebar={mobileSidebar}
          />

          <SideBar
            pageHidden={pageHidden}
            openContactModal={openContactModal}
            closeSidebar={closeSidebar}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            toggleResumeModal={toggleResumeModal}
          />

          <section
            style={{
              pointerEvents: `${mobileSidebar ? "none" : "all"}`,
            }}
            id="main-content"
          >
            <Main
              pageHidden={pageHidden}
              openContactModal={openContactModal}
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
              isResumeOpen={isResumeOpen}
              isSidebarOpen={isSidebarOpen}
              isProjectOpen={isProjectOpen}
            />
            <Projects
              isProjectOpen={isProjectOpen}
              setisProjectOpen={setisProjectOpen}
              pageHidden={pageHidden}
            />
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
