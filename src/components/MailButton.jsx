import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MailButton = ({ openContactModal, openModals, getScrollbarWidth }) => {
  return (
    <button
      onClick={() => openContactModal()}
      style={{ right: `${openModals ? getScrollbarWidth() : 32}px` }}
      className="mail__btn"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </button>
  );
};

export default MailButton;
