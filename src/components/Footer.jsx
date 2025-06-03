import React from "react";
import BluePrintSvg from "../assets/Blueprint.svg"
import FooterSvg from "../assets/Footer.svg"

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer">
        <div className="footer__bg--wrapper"><img className="footer__bg" src={FooterSvg} alt="" /></div>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__links">
              <div className="footer__link">About Me</div>
              <div className="footer__link">Github</div>
              <div className="footer__logo">
                <img className="footer__logo--img" src={BluePrintSvg} alt="" />
              </div>
              <div className="footer__link">Resume</div>
              <div className="footer__link">Contact</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
