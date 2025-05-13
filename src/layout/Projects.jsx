import { useState } from "react";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";

const Projects = () => {


  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const openProject = (index) => {
    setActiveProjectIndex(index);
  };

  const closeProject = () => {
    setActiveProjectIndex(null);
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
            <div className="projects">
              {Array.from({ length: 4 }).map((_, index) => (
                <Project
                  key={index}
                  index={index}
                  isActive={index === activeProjectIndex}
                  openProject={openProject}
                />
              ))}
              {activeProjectIndex !== null && (
                <ProjectDetails closeProject={closeProject} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
