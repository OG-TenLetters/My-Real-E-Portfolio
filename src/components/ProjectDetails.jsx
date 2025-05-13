import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectDetails = ({ projectData, id, closeProject }) => {
  useEffect(() => {
    Aos.init();
  }, [closeProject]);

  return (
    <div className="project__details--container project__details--container-active">
      <div data-aos="fade-in" data-aos-delay="350" className="project__details">
        <FontAwesomeIcon
          onClick={() => closeProject()}
          className="project__exit"
          icon={faTimes}
        />
        <div
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="100"
          className="project__title"
        >
         {projectData[id].title}
        </div>
        <p
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="project__para"
        >
          {projectData[id].para}
        </p>
        <div className="project__links">
          <a
            target="_blank"
            href={projectData[id].links[0].link} >
            <div className="project__link">
              <p>Github</p>
            </div>
          </a>
          <a target="_blank" href={projectData[id].links[1].link}>
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
          {
            projectData[id].techs.map((data, index) => (
              <div key={index} className="used-tech" style={{backgroundColor:`${data.bg_color}`}}>{data.tech}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
