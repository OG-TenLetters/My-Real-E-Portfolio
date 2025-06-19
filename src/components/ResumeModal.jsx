import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumeJpg from "../assets/Jadon Smith - Resume.jpg";

import {
  faCaretUp,
  faDownload,
  faFilePdf,
  faFileWord,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ResumeModal = ({ isResumeOpen, toggleResumeModal }) => {
  const [downloadMenu, setDownloadMenu] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const toggleDownloadMenu = () => {
    setDownloadMenu(!downloadMenu);
  };
  const handleImageLoad = () => {
    setIsImgLoaded(true);
  };

  return (
    <section id="resume__modal">
      <div className={`resume__modal ${isResumeOpen ? "show" : "hidden"}`}>
        <div
          onClick={() => toggleResumeModal()}
          className="resume__modal--exit"
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="resume__container">
          <div className="resume__row">
            <div className="resume__content">
              <div className="resume__top">
                <h2>Resume Preview:</h2>
              </div>
              <button
                onClick={() => toggleDownloadMenu()}
                className="resume__download clickable"
              >
                <h4 className="resume__download--text">Download As..</h4>
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              {downloadMenu && (
                <div className="resume__download--options">
                  <div
                    className="resume__download--wrapper"
                    onClick={() => toggleDownloadMenu()}
                  >
                    <a
                      className="resume__download--option"
                      href={"/Jadon Smith - Resume.pdf"}
                      download={"Jadon Smith - Resume.pdf"}
                    >
                      <FontAwesomeIcon icon={faFilePdf} />
                      .pdf
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </div>
                  <div
                    className="resume__download--wrapper"
                    onClick={() => toggleDownloadMenu()}
                  >
                    <a
                      className="resume__download--option"
                      onClick={() => alert("Docx are terrible for ATS, no thank you.")}
                    >
                      <FontAwesomeIcon icon={faFileWord} />
                      .docx
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </div>
                </div>
              )}
              <div className="resume__img--wrapper">
                <div className="resume__img--cover"></div>
                <div className="resume__img--skeleton"></div>

                <img
                  onLoad={() => handleImageLoad()}
                  style={{ display: `${isImgLoaded ? "flex" : "none"}` }}
                  className="resume__img"
                  src={resumeJpg}
                  alt=""
                />
              </div>
              {/* <div className="resume__zoom">
                <div className="resume__zoom--minus">
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <div>Size Bar Component Here</div>
                <div className="resume__zoom--plus">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeModal;
