import React from "react";
import ProfileImg from "../assets/Temp Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";
import TechBox from "../components/TechBox/TechBox";
import NavButton from "../components/NavButton";
import Linkbubble from "../components/Linkbubble";

const Main = () => {
  return (
    <>
      <section className="landing-page">
        <h1>Welcome</h1>
      </section>
      <section className="main">
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
        <div className="main__content">
          <div className="main__bg">
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
                    to a brand new episode of HAPPY WHEELS!!! Lixian, queue the
                    smooth jazz... WHERREE"S THE BLACKSMITH. Arin, shut up{" "}
                    Good Mythical Morning, my is Jacksepticeye and welcom BAck
                    to a brand new episode of HAPPY WHEELS!!! Lixian, queue the
                    smooth jazz... WHERREE"S THE BLACKSMITH. Arin, shut up{" "}
                  </p>
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
