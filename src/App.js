import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import WelcomeSection from "./components/WelcomeSection";
import Main from "./layout/Main";
import Projects from "./layout/Projects";

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <div className="content-wrapper">
        <div className="main__bg"></div>
        <SideBar />
        <div className="main-content">
          <Main />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
