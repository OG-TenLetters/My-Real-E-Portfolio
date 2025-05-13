import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__links">
              <div className="footer__link">About Me</div>
              <div className="footer__link">Github</div>
              <div className="footer__logo">
                <img className="footer__logo--img" src={null} alt="" />
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
