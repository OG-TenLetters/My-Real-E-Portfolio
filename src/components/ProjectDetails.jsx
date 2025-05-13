import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectDetails = ({ closeProject }) => {
    useEffect(() => {
        Aos.init();
    }, [closeProject])
  return (
    <div className="project__details--container project__details--container-active">
        <div
        data-aos="zoom-in-up"
        className="project__details">
          <FontAwesomeIcon
            onClick={() => closeProject()}
            className="project__exit"
            icon={faTimes}
          />
          <div data-aos="fade-in" className="project__title">
            Anithon
          </div>
          <p data-aos="fade-down" className="project__para">
            This is a from scratch project that I used to practice building up my
            styling skills and get familiar with useState, useEffect, useConext etc.
            Along with API integration
          </p>
          <div className="project__links">
            <a
              target="_blank"
              href="https://github.com/OG-TenLetters/Anime-List-React"
            >
              <div className="project__link">
                <p>Github</p>
              </div>
            </a>
            <a target="_blank" href="https://anime-list-react-orpin.vercel.app/">
              <div className="project__link">
                <p>
                  Live <br />
                  View
                </p>
              </div>
            </a>
          </div>
          <div className="used-techs">
            <p>Tech Used:</p>
            <div className="used-tech">
              React
            </div>
            <div
            data-aos="fade-up-left"
            className="used-tech">HTML</div>
            <div className="used-tech">CSS</div>
          </div>
        </div>
    </div>
  );
};

export default ProjectDetails;
