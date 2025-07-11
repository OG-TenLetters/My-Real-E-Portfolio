import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MailButton = ({
  openContactModal,
  openModals,
  getScrollbarWidth,
  shiftMailBtn,
  mobileSidebar,
}) => {
  return (
    <button
      onClick={() => openContactModal()}
      style={{
        right: `${openModals ? getScrollbarWidth() : 32}px`,
        transition: "all 300ms ease",
        opacity: `${openModals | mobileSidebar | shiftMailBtn ? "0" : "1"}`,
        pointerEvents: `${openModals | mobileSidebar | shiftMailBtn ? "none" : "all"}`,
        transform: ` ${shiftMailBtn ? "translateY(40px)" : "translateY(0)"}`,
      }}
      className="mail__btn"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </button>
  );
};

export default MailButton;
