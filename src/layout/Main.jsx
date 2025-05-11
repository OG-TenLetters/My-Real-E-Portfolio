import TechBox from "../components/TechBox/TechBox";
import SideBar from "../components/SideBar";

const Main = () => {
  return (
    <>
      <section className="landing-page">
        <h1>Welcome</h1>
      </section>
      <section className="main">
        <div className="main__bg">
          <div className="main__content">
          <SideBar />
            <div className="main__section">
              <div className="container">
                <div className="row">
                  <TechBox />
                  <div id="about-me">
                    <h3 className="about-me__title">
                      About <br /> Me:
                    </h3>
                    <p className="about-me__para">
                      {" "}
                      Good Mythical Morning, my is Jacksepticeye and welcom BAck
                      to a brand new episode of HAPPY WHEELS!!! Lixian, queue
                      the smooth jazz... WHERREE"S THE BLACKSMITH. Arin, shut up{" "}
                      Good Mythical Morning, my is Jacksepticeye and welcom BAck
                      to a brand new episode of HAPPY WHEELS!!! Lixian, queue
                      the smooth jazz... WHERREE"S THE BLACKSMITH. Arin, shut up{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
