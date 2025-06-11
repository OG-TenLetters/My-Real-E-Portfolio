import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import BackgroundImg from "./assets/BackgroundExample.png";
import Projects from "./components/Projects/Projects";
import useWindowWidth from "./hooks/useWindowWidth";

const MobileBreak = 768;

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const width = useWindowWidth()
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const initialWidth = typeof window !== 'undefined' ? window.innerWidth : (MobileBreak + 1)
    return initialWidth > MobileBreak;
  })
  


  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  const toggleSidebar = () => {
    if (width <= MobileBreak) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  const closeSidebar = () => {
    if (width <= MobileBreak) {
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
  if (width > MobileBreak) {
  setIsSidebarOpen(true)
  } else {
  setIsSidebarOpen(false)
  }
  }, [width])

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
        <WelcomeSection />
        <div className="content-wrapper">

          {isSidebarOpen && (
            <SideBar 
            closeSidebar={closeSidebar}
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
            />
          )}
          <div className="main__bg"></div>
          <div className="main-content">
            <Main
              toggleSidebar={toggleSidebar}
              toggleResumeModal={toggleResumeModal}
              isResumeOpen={isResumeOpen}
            />
            <Projects />
          </div>
        </div>
        <Footer toggleResumeModal={toggleResumeModal}/>
      </div>
    </div>
  );
}

export default App;
