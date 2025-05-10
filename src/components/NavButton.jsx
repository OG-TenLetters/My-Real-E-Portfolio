const NavButton = ({ title }) => {
  return (
    <div className="btn__glimmer">
      <div></div>
      <button className="nav__btn">{title}</button>
    </div>
  );
};

export default NavButton;
