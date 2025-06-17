import ProfileImg from "../assets/Temp Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEnvelope,
  faMailForward,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import Linkbubble from "./Linkbubble";
import { useState } from "react";

const SideBar = ({
  toggleResumeModal,
  toggleSidebar,
  closeSidebar,
  openContactModal,
  pageHidden,
  isResumeOpen,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleResume = () => {
    closeSidebar();
    toggleResumeModal();
  };
  const handleImageLoad = () => {
    setImgLoaded(true);
  };
  const handleOpenedContact = () => {
    closeSidebar();
    openContactModal();
  }

  return (
    <div className={`sidebar ${pageHidden && "contact-modal--open"}`}>
      <div onClick={() => toggleSidebar()} className="sidebar__exit clickable">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="profile">
        <div className="profile__styling-1">
          <div className="profile__styling-2">
            <figure className="profile__img--wrapper">
              <div className="profile__img--skeleton"></div>

              <img
                src={ProfileImg}
                alt=""
                className="profile__img"
                onLoad={() => handleImageLoad()}
                style={{ display: imgLoaded ? "flex" : "none" }}
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="info">
        <h3 className="name">Jadon Smith</h3>
        <h4 className="job-title">Frontend Web Developer</h4>
        <h4 className="location">📍 Washington State, USA 🌎</h4>
        <div className="link-box">
          <a href="#resume__modal">
            <button onClick={() => handleResume()} className="resume__btn">
              Resume
            </button>
          </a>
          <div className="links">
            <a
              className="link-color"
              href="https://github.com/OG-TenLetters"
              target="_blank"
            >
              <Linkbubble social={faGithub} />
            </a>
            <a
              className="link-color"
              href="https://www.instagram.com/ten._.letters"
              target="_blank"
            >
              <Linkbubble social={faInstagram} />
            </a>
            <a
              className="link-color"
              href="https://www.linkedin.com/in/jadon-smith-6143b9334/"
              target="_blank"
            >
              <Linkbubble social={faLinkedin} />
            </a>
            <div 
            onClick={() => handleOpenedContact()}
            className="link-color">
              <Linkbubble social={faEnvelope} />
            </div>
          </div>
        </div>
      </div>
      <div className="info__extra">
        <h3>24 Years Old</h3>
        <h4>Learning Web Development For 5 Months</h4>
        <p>
          Passionate about my work <br />
          (An overused word I know)
        </p>
      </div>

      <div className="nav__btns">
        <a href="#about-me">
          <NavButton title={"About Me"} />
        </a>
        <a href="#my-projects">
          <NavButton title={"My Projects"} />
        </a>
        <div onClick={() => handleOpenedContact()}>
          <NavButton title={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
