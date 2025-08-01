import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResumeModal from "../components/ResumeModal";
import TechBox from "../components/TechBox/TechBox";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Main = ({
  toggleResumeModal,
  isResumeOpen,
  isProjectOpen,
  isSidebarOpen,
  toggleSidebar,
  pageHidden,
  openContactModal,
  mobileSidebar,
}) => {
  return (
    <>
      <div className="main__nav">
        <div
          style={{
            transition: "all 300ms ease",
            opacity: `${
              isResumeOpen | isProjectOpen | isSidebarOpen ? "0" : "1"
            }`,
            pointerEvents: `${
              isResumeOpen | isProjectOpen | isSidebarOpen ? "none" : "all"
            }`,
            transform: `${isSidebarOpen ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          className="main__nav--btn"
          onClick={() => toggleSidebar()}
        >
          <FontAwesomeIcon icon={faBars} />
          <div className="main__nav--pulse-ring"></div>
          <div className="main__nav--pulse-ring-2"></div>
        </div>
      </div>
      <section className="main">
        <ResumeModal
          isResumeOpen={isResumeOpen}
          toggleResumeModal={toggleResumeModal}
        />
        <div className={`main__container ${isSidebarOpen}`}>
          <div
            style={{
              transition: "opacity 300ms ease",
              opacity: `${isResumeOpen ? "0" : "1"}`,
            }}
            className="main__row"
          >
            <TechBox pageHidden={pageHidden} />
            <section id="about-me">
              <div className="about-me__container">
                <div
                  className={`about-me ${pageHidden && "contact-modal--open"}`}
                >
                  <h2 className="about-me__header">
                    About <br /> Me:
                  </h2>
                  <p className="about-me__para">
                    Hello there! My name is Jadon and I'm located in Vancouver,
                    WA, USA and I'm just a guy who is a late bloomer with
                    programming. I've only been programming for 5 months but you
                    could probably tell that I have a knack for this and an
                    enjoyment for it as well. This may sound cliche, but I love
                    learning new things, and I also love collaborating with
                    others to see a project to completion. I truly wish I'd
                    started coding sooner, but I'm here now, and the more I
                    learn the more I realize what I don't know yet and that's
                    oddly exciting. Anyhow, I do understand that this is a
                    business world, so, when you're ready to know how I can
                    benefit yours, feel free to{" "}
                    <span
                      onClick={() => openContactModal()}
                      className="link__hover-effect"
                      style={{pointerEvents: `${mobileSidebar ? "none" : "all"}`}}
                    >
                      contact me
                    </span>
                    .
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
