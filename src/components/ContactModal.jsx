import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { send, sendForm, init, EmailJSResponseStatus } from "@emailjs/browser";

const ContactModal = ({
  isContactOpen,
  closeContactModal,
  setIsContactSubmitted,
  setNameInput,
}) => {
  const [shouldRender, setShouldRender] = useState(isContactOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tempValue, setTempValue] = useState("");

  const animationDurationMs = 1700;

  const handleNameValue = (event) => {
    setTempValue(event.target.value);
  };
  const captureValue = () => {
    setNameInput(tempValue);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendForm(
      "service_dmf4e7a",
      "template_acfbkmf",
      e.target,
      "qVGgK80-uMkkItvbU"
    )
      .then(() => {
        setIsContactSubmitted(true);
      })
      .catch(() => {
        alert(
          "The email service is temporarily unavailable. Please email me directly at 1tenletters0@gmail.com"
        );
      });

    setTimeout(() => {
      setIsLoading(false);
      closeContactModal();
    }, 300);
  };

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
          {!isLoading && (
            <div className="contact-modal__exit">
              <FontAwesomeIcon
                onClick={() => closeContactModal()}
                icon={faTimes}
              />
            </div>
          )}
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
          <div
            className={`contact-form__container ${isLoading && "invisible"}`}
          >
            <div className="sending">
              <FontAwesomeIcon icon={faSpinner} />
            </div>
            <form id="contact__form" action="" onSubmit={sendEmail}>
              <div className="form__item">
                <label className="form__item--label">Name:</label>
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  onChange={handleNameValue}
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
        </div>
        <div
          className={`
            contact-modal__third contact-modal__last
            ${isContactOpen && !isClosing ? "contact-modal--slide-in" : ""}
            ${isClosing ? "contact-modal--slide-right" : ""}
          `}
        >
          {isLoading ? (
            <button id="contact__submit" className="form__submit">
              <FontAwesomeIcon className="spin" icon={faSpinner} />
            </button>
          ) : (
            <button
              onClick={() => captureValue()}
              id="contact__submit"
              type="submit"
              form="contact__form"
              className="form__submit"
            >
              Send it My Way!
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactModal;
