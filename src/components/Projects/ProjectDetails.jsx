import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faTimes } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ projectData, currentId, toggleProject, componentRef,
 }) => {
  const zoomCenter0 = {
    hidden: {
      y: "0",
      x: "-20rem",
      opacity: 0,
    },
    visible: {
      y: "50%",
      x: "50%",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: "0",
      x: "-20rem",
      opacity: 0,
    },
  };

  return (
    <section ref={componentRef} id="project__details">
      <div className="project__details">
        <FontAwesomeIcon
          onClick={() => toggleProject()}
          className="project__exit"
          icon={faTimes}
        />
        <div className="project__title">{projectData[currentId]?.title}</div>
        <p className="project__para">{projectData[currentId]?.para}</p>
        <div className="project__links">
          <a
            target="_blank"
            rel="noreferrer"
            href={projectData[currentId]?.links[0].link}
          >
            <div className="project__link">
              <p className="project__repo--desktop">Github</p>
              <FontAwesomeIcon className="project__repo--mobile" icon={faGithub} />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={projectData[currentId]?.links[1].link}
          >
            <div className="project__link">
              <p className="project__repo--desktop">
                Live <br />
                View
              </p>
              <FontAwesomeIcon className="project__repo--mobile" icon={faMobileScreen} />
            </div>
          </a>
        </div>
        <div className="used-techs">
          <p>Tech Used:</p>
          {projectData[currentId]?.techs.map((techs, index) => (
            <div
              key={techs.tech}
              style={{
                backgroundColor: techs.bg_color,
                animation: `fadeLeft 600ms ${600 + 150 * index}ms forwards`,
              }}
              className={`used-tech`}
            >
              {techs.tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
