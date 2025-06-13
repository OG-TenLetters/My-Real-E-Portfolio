import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import BackgroundImg from "./assets/BackgroundExample.png";
import Projects from "./components/Projects/Projects";
import useWindowWidth from "./hooks/useWindowWidth";
import ContactModal from "./components/ContactModal";

const MobileBreak = 768;

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const width = useWindowWidth();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const initialWidth =
      typeof window !== "undefined" ? window.innerWidth : MobileBreak + 1;
    return initialWidth > MobileBreak;
  });

  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  const toggleSidebar = () => {
    if (width <= MobileBreak) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  const openContactModal = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsContactOpen(true);
    }, 0);
  };

  const closeContactModal = () => {
    setIsContactOpen(false)
  }
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
    <div
      className="App"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "100vw",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="App-bg">
        <ContactModal
          isContactOpen={isContactOpen}
          openContactModal={openContactModal}
          closeContactModal={closeContactModal}
          isContactSubmitted={isContactSubmitted}
          setIsContactSubmitted={setIsContactSubmitted}
        />
        <WelcomeSection
        isContactOpen={isContactOpen} isContactSubmitted={isContactSubmitted} />
        <div className="content-wrapper">
          {isSidebarOpen && (
            <SideBar
              isContactOpen={isContactOpen}
              openContactModal={openContactModal}
              closeSidebar={closeSidebar}
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
            />
          )}

          <section id="main-content">
            <Main
              isContactOpen={isContactOpen}
              openContactModal={openContactModal}
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
              isResumeOpen={isResumeOpen}
            />
            <Projects isContactOpen={isContactOpen} />
          </section>
        </div>
        <Footer
        isContactOpen={isContactOpen}
          openContactModal={openContactModal}
          toggleResumeModal={toggleResumeModal}
        />
      </div>
    </div>
  );
}

export default App;
