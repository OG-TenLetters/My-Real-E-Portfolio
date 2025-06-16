import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ContactModal = ({
  isContactOpen,
  openContactModal,
  closeContactModal,
  isContactSubmitted,
  setIsContactSubmitted,
}) => {
  const [shouldRender, setShouldRender] = useState(isContactOpen);
  const [isClosing, setIsClosing] = useState(false);

  const animationDurationMs = 1700;

  useEffect(() => {
    if (isContactOpen) {

      setIsClosing(false);
    } else {
      if (shouldRender) {
        setIsClosing(true); 
        const timeoutId = setTimeout(() => {
    
          setIsClosing(false); 
        }, animationDurationMs);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [isContactOpen, shouldRender]); 



  return (
    <>
      <div
        className={`
          contact-modal__container
          ${isContactOpen && !isClosing ? "show" : ""}
          ${isClosing ? "closing" : ""}
        `}
      >
        <div
          className={`
            contact-modal__cover
            ${isContactOpen && !isClosing ? "cover-fade" : ""}
            ${isClosing ? "cover-fade-out" : ""}
          `}
        ></div>
        <div
          className={`
            contact-modal__third contact-modal__first
            ${isContactOpen && !isClosing ? "contact-modal--slide-in" : ""}
            ${isClosing ? "contact-modal--slide-left" : ""}
          `}
        >
          <div className="contact-modal__exit">
            <FontAwesomeIcon
              onClick={() => closeContactModal()}
              icon={faTimes}
            />
          </div>
          <h3 className="contact-modal__header">Let's Have a Chat!</h3>
          <h4 className="contact-modal__sub-header">
            I'm currently open to new opportunities.
          </h4>
        </div>
        <div
          className={`
            contact-modal__third contact-modal__middle
            ${isContactOpen && !isClosing ? "contact-modal--zoom-in" : ""}
            ${isClosing ? "contact-modal--shrink" : ""}
          `}
        >
          <form id="contact__form" action="" onSubmit={null}>
            <div className="form__item">
              <label className="form__item--label">Name:</label>
              <input
                className="input"
                name="user_name"
                type="text"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Email:</label>
              <input
                className="input"
                name="user_email"
                type="text"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message:</label>
              <textarea
                className="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div
          className={`
            contact-modal__third contact-modal__last
            ${isContactOpen && !isClosing ? "contact-modal--slide-in" : ""}
            ${isClosing ? "contact-modal--slide-right" : ""}
          `}
        >
          <button id="contact__submit" className="form__submit">
            Send it My Way!
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
