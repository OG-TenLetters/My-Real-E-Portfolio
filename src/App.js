import { useRef, useState } from "react";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import Projects from "./layout/Projects";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BackgroundImg from "./assets/BackgroundExample.png";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const toggleResumeModal = () => {
    setIsResumeOpen(!isResumeOpen)
  }
  const parallaxRef = useRef();
  return (
    <div className="App">  
    <Parallax
    pages={6} style={{top: '0', left: '0',
      height: '100vh', width: '100vw',
    }}>
      <ParallaxLayer offset={0} speed={0.1} style={{
         backgroundImage: `url(${BackgroundImg})`,
         backgroundPosition: "center top",
         backgroundSize: "100% auto",
         backgroundRepeat: "repeat-y",
         height: '100%', width: '100%',
      }}
      >
      </ParallaxLayer>
        <ParallaxLayer 
         offset={0} speed={0}
         >
          <div class="App-bg">
            <WelcomeSection />
            <div className="content-wrapper">
              <SideBar toggleResumeModal={toggleResumeModal}/>
              <div className="main__bg"></div>
              <div className="main-content">
                <Main toggleResumeModal={toggleResumeModal} isResumeOpen={isResumeOpen} />
                <Projects />
              </div>
            </div>
            <Footer />
          </div>
        </ParallaxLayer>

    </Parallax>
    </div>
  );
}

export default App;
