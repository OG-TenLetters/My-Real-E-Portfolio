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
      className={`project clickable project${`${index}`} ${
        showDetails && "project--active"
      } ${hideProjects && "projects--inactive"}`}
    >
      <figure className="project__wrapper">
        <img
          src={data.image}
          onClick={() => captureId()}
          className="project__img"
          alt="Screenshot of Project"
        />
        <>
          <div
            className={`${
              isProjectOpen && index !== currentId
                ? "project__img--cover--inactive"
                : ""
            } project__img--cover`}
          ></div>
          <div className="project__details--hover">
            <h3 onClick={() => captureId()}>Click For Details</h3>
          </div>
        </>
      </figure>
    </div>
  );
};

export default Project;
