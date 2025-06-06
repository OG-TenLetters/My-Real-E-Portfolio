import React from "react";
import BluePrintSvg from "../assets/Blueprint.svg"
import FooterSvg from "../assets/Footer.svg"
import Logo from "../assets/Jadon-Logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section id="footer">
        <div className="footer__bg--wrapper"><img className="footer__bg" src={FooterSvg} alt="" /></div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__links">
                <a href="">
                  <div className="footer__link link__hover-effect ">About Me</div>
                </a>
              <a target="_blank"  href="https://github.com/OG-TenLetters">
                <div className="footer__link link__hover-effect ">Github</div>
              </a>
              <div className="footer__logo">
                <img className="footer__logo--img" src={Logo} alt="" />
                <div className="footer__logo--hover   "><FontAwesomeIcon icon={faArrowUp}/> Top</div>
              </div>
              <a href={null}>
                <div className="footer__link link__hover-effect ">Resume</div>
              </a>
              <a href={null}>
                <div className="footer__link link__hover-effect ">Contact</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
