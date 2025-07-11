import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import ProjectDetailsApi from "./ProjectDetailsApi";
import ProjectDetails from "./ProjectDetails";
import useScrollToCenter from "../../hooks/useScrollToCenter";

const Projects = ({ pageHidden, isProjectOpen, setisProjectOpen }) => {
  const [currentId, setCurrentId] = useState(null);
  const componentRef = useScrollToCenter(isProjectOpen);
  const techHoverRef = useRef();
  const projectData = ProjectDetailsApi();

  const toggleProject = () => {
    setisProjectOpen(!isProjectOpen);
  };

  const getScrollbarWidth = () => {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    outer.style.msOverflowStyle = "scrollbar";
    document.body.appendChild(outer);

    const inner = document.createElement("div");
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  };

  useEffect(() => {
    if (isProjectOpen) {
      document.body.classList.add("lockScroll");
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      document.body.classList.remove("lockScroll");
    }
    return () => {
      document.body.classList.remove("lockScroll");
      document.body.style.paddingRight = "0px";
    };
  }, [isProjectOpen]);

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

  return (
    <section id="my-projects">
      <div className={`my-projects ${pageHidden && "contact-modal--open"}`}>
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
      </div>
    </section>
  );
};

export default Projects;
