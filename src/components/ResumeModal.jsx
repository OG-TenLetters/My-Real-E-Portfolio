import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumeJpg from "../assets/Jadon Smith - Resume.jpg";
import {
  faCaretUp,
  faDownload,
  faFile,
  faFilePdf,
  faFileWord,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ResumeModal = ({toggleResumeModal}) => {
  const [downloadMenu, setDownloadMenu] = useState(false);

  const toggleDownloadMenu = () => {
    setDownloadMenu(!downloadMenu);
  };
  


  return (
    <section id="resume__modal">
        <div onClick={() => toggleResumeModal()} className="resume__modal--exit">
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
              <h4>Download As..</h4>
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
            {downloadMenu && (
              <div className="resume__download--options">
                <div className="resume__download--wrapper" onClick={() => toggleDownloadMenu()}>
                    <a className="resume__download--option" href={null}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      .pdf
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                </div>
                <div className="resume__download--wrapper" onClick={() => toggleDownloadMenu()}>
                    <a className="resume__download--option" href={null}>
                      <FontAwesomeIcon icon={faFileWord} />
                      .docx
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                </div>
              </div>
            )}

            <div className="resume__img--wrapper">
              <div className="resume__img--cover"></div>
              <img className="resume__img" src={resumeJpg} alt="" />
            </div>
            <div className="resume__zoom">
              <div className="resume__zoom--minus">
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div>Size Bar Component Here</div>
              <div className="resume__zoom--plus">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeModal;
