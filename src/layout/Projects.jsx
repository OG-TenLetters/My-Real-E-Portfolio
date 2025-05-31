import { useState } from "react";
import Project from "../components/Project";
import ProjectDetailsApi from "../components/ProjectDetailsApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isProjectOpen, setisProjectOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const projectData = ProjectDetailsApi();

  const toggleProject = () => {
    setisProjectOpen(!isProjectOpen);
  };
  return (
    <section id="my-projects">
      <h2 className="projects__header">
        My <br />
        Projects
      </h2>
      <div className="projects__container">
        <div className="projects__row">
          <div className="project-box">
            {isProjectOpen && (
              <section id="project__details">
                <div className="project__details">
                  <FontAwesomeIcon
                    onClick={() => toggleProject()}
                    className="project__exit"
                    icon={faTimes}
                  />
                  <div className="project__title">
                    {projectData[currentId].title}
                  </div>
                  <p className="project__para">{projectData[currentId].para}</p>
                  <div className="project__links">
                    <a
                      target="_blank"
                      href={projectData[currentId].links[0].link}
                    >
                      <div className="project__link">
                        <p>Github</p>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href={projectData[currentId].links[1].link}
                    >
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
                    {projectData[currentId].techs.map((techs, index) => (
                      <div key={techs.tech} style={{backgroundColor: techs.bg_color, animation: `fadeIn 600ms ${600 + 150 * index}ms forwards`}} className={`used-tech`}>
                        {techs.tech}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            <div className="projects">
              {projectData.map((data, index) => (
                <Project
                  key={data.id}
                  index={index}
                  data={data}
                  setCurrentId={setCurrentId}
                  currentId={currentId}
                  isProjectOpen={isProjectOpen}
                  toggleProject={toggleProject}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
