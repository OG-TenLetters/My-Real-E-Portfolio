
import ProjectImg from "../assets/AnithonShowcase.png";


const Project = ({ data, index, isActive, openProject, setProjectId }) => {

  const openProjectById = () => {
    openProject(index)
    setProjectId(index)
  }
  return (
    <div onClick={() => openProjectById(index)} className={`project project${`${index}`} ${isActive ? "project--active" : ""}`}>
      <figure className="project__wrapper">
        <img src={data.image} alt="" className="project__img" />
        <div className="project__img--cover"></div>
        <div className="project__details--hover">
          <h3>Click For Details</h3>
        </div>
      </figure>
    </div>
  );
};

export default Project;
