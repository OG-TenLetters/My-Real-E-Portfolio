const NavButton = ({ title }) => {
  return (
    <div className="btn__glimmer">
      <div></div>
      <button className="nav__btn
      clickable">{title}</button>
    </div>
  );
};

export default NavButton;
