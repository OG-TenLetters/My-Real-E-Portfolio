import { useRef, useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import Projects from "./layout/Projects";
import BackgroundImg from "./assets/BackgroundExample.png";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen)
  }
  const parallaxRef = useRef();
  return (
    <div className="App"
    style={{backgroundImage: `url(${BackgroundImg})` , backgroundSize: "100vw", backgroundRepeat: "repeat-y"}}
    
    >  


 
          <div class="App-bg"
          >
            <WelcomeSection />
            <div className="content-wrapper"
            
            >
              <SideBar toggleResumeModal={toggleResumeModal}/>
              <div className="main__bg"></div>
              <div className="main-content">
                <Main toggleResumeModal={toggleResumeModal} isResumeOpen={isResumeOpen} />
                <Projects />
              </div>
            </div>
            <Footer />
          </div>
     

 
    </div>
  );
}

export default App;
