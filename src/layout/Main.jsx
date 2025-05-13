import TechBox from "../components/TechBox/TechBox";

const Main = () => {
  return (
    <>
      <section className="main">
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
                  {" "}
                  Good Mythical Morning, my is Jacksepticeye and welcom BAck to
                  a brand new episode of HAPPY WHEELS!!! Lixian, queue the
                  smooth jazz... WHERREE"S THE BLACKSMITH. Arin, shut up Good
                  Mythical Morning, my is Jacksepticeye and welcom BAck to a
                  brand new episode of HAPPY WHEELS!!! Lixian, queue the smooth
                  jazz... WHERREE"S THE BLACKSMITH. Arin, shut up{" "}
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
