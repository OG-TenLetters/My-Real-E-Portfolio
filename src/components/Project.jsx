
const Project = ({
  setCurrentId,
  currentId,
  index,
  data,
  toggleProject,
  isProjectOpen,
}) => {
  const captureId = () => {
    setCurrentId(index);
    toggleProject();

  };
  const showDetails = isProjectOpen && index === currentId;
  const hideProjects = isProjectOpen && index !== currentId;
  return (
    <div
      className={`project${`${index}`} ${showDetails && "project--active"} ${hideProjects && "projects--inactive"}`}
    >
      <figure className="project__wrapper" >
        <img
          src={data.image}
          onClick={() => captureId()}
          className="project__img"
        />
        <>
          <div className={`${isProjectOpen && index !== currentId ? "project__img--cover--inactive" : ""} project__img--cover`}></div>
          <div className="project__details--hover">
            <a href="#my-projects">
              <h3 onClick={() => captureId()}>Click For Details</h3>
            </a>
          </div>
        </>
      </figure>
    </div>
  );
};

export default Project;
