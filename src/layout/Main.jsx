import React from "react";
import ProfileImg from "../assets/Temp Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";

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
                <div className="link">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="link">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="link">
                  <FontAwesomeIcon icon={faMailForward} />
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
            <button className="nav__btn">About Me</button>
            <button className="nav__btn"> My Projects</button>
            <button className="nav__btn">Contact</button>
          </div>
        </div>
        <div className="main__content">
          <div className="container">
            <div className="row">
              <div className="tech-box">
                <div className="tech-box__title">My Tech Stack</div>
                <div className="techs">
                  <div className="tech">React</div>
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
