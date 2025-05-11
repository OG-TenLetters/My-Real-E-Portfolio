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
                <Linkbubble social={faGithub} />
                <Linkbubble social={faInstagram} />
                <Linkbubble social={faLinkedin} />
                <Linkbubble social={faMailForward} />
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
            <NavButton title={"About Me"} />
            <NavButton title={"My Projects"} />
            <NavButton title={"Contact"} />
          </div>
        </div>
  )
}

export default SideBar