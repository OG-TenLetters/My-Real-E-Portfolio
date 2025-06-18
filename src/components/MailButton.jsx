import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MailButton = ({ openContactModal, openModals, getScrollbarWidth }) => {
  return (
    <button
      onClick={() => openContactModal()}
      style={{
        right: `${openModals ? getScrollbarWidth() : 32}px`,
        transition: "all 300ms ease",
        opacity: `${openModals ? "0" : "1"}`,
        pointerEvents: `${openModals ? "none" : "all"}`,
      }}
      className="mail__btn"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </button>
  );
};

export default MailButton;
