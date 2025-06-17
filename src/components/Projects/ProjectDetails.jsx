import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({
  projectData,
  currentId,
  toggleProject,
  componentRef,
}) => {

  return (
    <section ref={componentRef} id="project__details">
      <div className="project__details">
        <FontAwesomeIcon
          onClick={() => toggleProject()}
          className="project__exit clickable"
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
              <FontAwesomeIcon
                className="project__repo--mobile"
                icon={faGithub}
              />
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
              <FontAwesomeIcon
                className="project__repo--mobile"
                icon={faArrowUpRightFromSquare}
              />
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
