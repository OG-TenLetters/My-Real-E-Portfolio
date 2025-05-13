import ProfileImg from "../assets/Temp Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../components/NavButton";
import Linkbubble from "../components/Linkbubble";

const SideBar = () => {
  return (
            <div className="sidebar">
          <div className="profile">
            <div className="profile__styling-1">
              <div className="profile__styling-2">
                <figure className="profile__img--wrapper">
                  <img src={ProfileImg} alt="" className="profile__img" />
                </figure>
              </div>
            </div>
          </div>

          <div className="info">
            <h3 className="name">Jadon Smith</h3>
            <h4 className="job-title">Frontend Web Developer</h4>
            <h4 className="location">📍 Washington State, USA 🌎</h4>
            <div className="link-box">
              <button className="resume__btn">Resume</button>
              <div className="links">
                <a className="link-color" href="https://github.com/OG-TenLetters" target="_blank">
                  <Linkbubble social={faGithub} />
                </a>
                <a className="link-color" href="https://www.instagram.com/ten._.letters" target="_blank">
                  <Linkbubble social={faInstagram} />
                </a>
                <a className="link-color" href="https://www.linkedin.com/in/jadon-smith-6143b9334/" target="_blank">
                  <Linkbubble social={faLinkedin} />
                </a>
                <a className="link-color" href="" target="_blank">
                  <Linkbubble social={faMailForward} />
                </a>
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
            <a href="#">
              <NavButton title={"Contact"} />
            </a>
          </div>
        </div>
  )
}

export default SideBar