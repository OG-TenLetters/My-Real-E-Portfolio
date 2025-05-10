
const Tech = ({ badge, title }) => {
  return (
    
    <div className="tech">
      <figure className="tech__img--wrapper">
        <img src={badge} alt="" className="tech__img" />
      </figure>
      <div className="tech__title">{title}</div>
    </div>
  );
};

export default Tech;
