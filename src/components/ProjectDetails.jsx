import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectDetails = ({ data, closeProject }) => {
  useEffect(() => {
    Aos.init();
  }, [closeProject]);

  return (
    <div className="project__details--container ">
      <div className="project__details">
        <FontAwesomeIcon
          onClick={() => closeProject()}
          className="project__exit"
          icon={faTimes}
        />
        <div className="project__title">{null}</div>
        <p className="project__para">{null}</p>
        <div className="project__links">
          <a target="_blank" href={null}>
            <div className="project__link">
              <p>Github</p>
            </div>
          </a>
          <a target="_blank" href={null}>
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
          <div className="used-tech">{null}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
