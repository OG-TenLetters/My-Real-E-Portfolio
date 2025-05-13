import { useState } from "react";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import ProjectDetailsApi from "../components/ProjectDetailsApi";


const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [projectId, setProjectId] = useState({})
  const projectData = ProjectDetailsApi() 
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
              {projectData.map((data, index) => (
                <Project
                data={data}
                  key={index}
                  index={index}
                  isActive={index === activeProjectIndex}
                  openProject={openProject}
                  setProjectId={setProjectId}
                />
              ))}
              {activeProjectIndex !== null && (
                <ProjectDetails
                id={projectId}
                projectData={projectData}
                closeProject={closeProject} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
