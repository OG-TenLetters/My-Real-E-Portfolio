import { useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import Projects from "./layout/Projects";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen)
  }
  return (
    <div className="App">
      <WelcomeSection />
      <div className="content-wrapper">
        <div className="main__bg"></div>
        <SideBar toggleResumeModal={toggleResumeModal}/>
        <div className="main-content">
          <Main toggleResumeModal={toggleResumeModal} isResumeOpen={isResumeOpen} />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
