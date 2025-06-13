import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactModal = ({
  isContactOpen,
  openContactModal,
  closeContactModal,
  isContactSubmitted,
  setIsContactSubmitted,
}) => {
  return (
    <>
      <div className={`${isContactOpen && "show"} contact-modal__container`}>
        <div className={`${isContactOpen && "cover-fade"} contact-modal__cover`}></div>
        <div className={`${isContactOpen && "contact-modal--slide"} contact-modal__third contact-modal__first`}>
          <div className="contact-modal__exit">
            <FontAwesomeIcon onClick={() => closeContactModal() } icon={faTimes} />
          </div>
          <h3 className="contact-modal__header">Let's Have a Chat!</h3>
          <h4 className="contact-modal__sub-header">
            I'm currently open to new opportunities.
          </h4>
        </div>
        <div className={`${isContactOpen && "contact-modal--zoom"} contact-modal__third contact-modal__middle`}>
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
        <div className={`${isContactOpen && "contact-modal--slide"} contact-modal__third contact-modal__last`}>
          <button id="contact__submit" className="form__submit">
            Send it My Way!
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
