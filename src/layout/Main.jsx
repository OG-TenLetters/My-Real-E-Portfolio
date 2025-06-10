import ResumeModal from "../components/ResumeModal";
import TechBox from "../components/TechBox/TechBox";

const Main = ({ toggleResumeModal, isResumeOpen }) => {
  return (
    <>
      <section className="main">
        {isResumeOpen && <ResumeModal toggleResumeModal={toggleResumeModal} />}
        <div className="main__container">
          <div className="main__row">
              <TechBox />
            <section id="about-me">
              <div className="about-me__container">
                <div className="about-me">
                  <h2 className="about-me__header">
                    About <br /> Me:
                  </h2>
                  <p className="about-me__para">
                    Hello there! My name is Jadon and I'm located in Vancouver, WA, USA and I'm just a guy who is a late bloomer with programming. 
                    I've only been programming for 6 months but you could probably tell that I have a knack for this and an enjoyment for it as well.
                    This may sound cliche, but I love learning new things, and I also love collaborating with others to see a to project completion. 
                    I truly wish I'd started coding sooner, but I'm here now, and the more I learn the more I realize what I don't know yet
                    and that's oddly exciting. Anyhow,
                     I do understand that this is a business world, so, when you're ready to know how I can benefit yours, feel free to <span className="link__hover-effect">contact me</span>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
