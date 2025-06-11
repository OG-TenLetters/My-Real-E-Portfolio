import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import ProjectDetailsApi from "./ProjectDetailsApi";
import ProjectDetails from "./ProjectDetails";
import useScrollToCenter from "../../hooks/useScrollToCenter";

const Projects = () => {
  const [isProjectOpen, setisProjectOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const projectData = ProjectDetailsApi();
  const techHoverRef = useRef();

  const componentRef = useScrollToCenter(isProjectOpen);

  useEffect(() => {
    const techHover = techHoverRef.current;
    if (techHover) {
      const handleTechHoverEnter = () => {
        techHover.style.transform = "translateY(4px)";
        techHover.style.brightness = 1.2;
        techHover.style.transition = "all 0.3s ease-in-out";
      };
      const handleTechHoverLeave = () => {
        techHover.style.transform = "translateY(0)";
        techHover.style.brightness = 1;
        techHover.style.transition = "all 0.3s ease-in-out";
      };
      techHover.addEventListener("mouseenter", handleTechHoverEnter);
      return () => {
        techHover.removeEventListener("mouseleaver", handleTechHoverLeave);
      };
    }
  }, [techHoverRef]);

  const toggleProject = () => {
    setisProjectOpen(!isProjectOpen);
  };
  return (
    <section id="my-projects">
      <h2 className={`projects__header`}>
        My <br />
        Projects
      </h2>
      <div className="projects__container">
        <div className="projects__row">
          <div className="project-box">
            {isProjectOpen && (
              <ProjectDetails
              componentRef={componentRef}
                toggleProject={toggleProject}
                currentId={currentId}
                projectData={projectData}
              />
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
