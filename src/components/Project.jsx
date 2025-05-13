
import ProjectImg from "../assets/AnithonShowcase.png";


const Project = ({ index, isActive, openProject }) => {

  return (
    <div onClick={() => openProject(index)} className={`project ${isActive ? "project--active" : ""}`}>
      <figure className="project__wrapper">
        <img src={ProjectImg} alt="" className="project__img" />
        <div className="project__img--cover"></div>
        <div className="project__details--hover">
          <h3>Click For Details</h3>
        </div>
      </figure>
    </div>
  );
};

export default Project;
