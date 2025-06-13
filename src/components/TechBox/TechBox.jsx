import TechBoxApi from "./TechBoxApi";
import Tech from "./Tech";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TechBox = ({isContactOpen}) => {
  const tech = TechBoxApi();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    rtl: false,
    ltr: true,
  };

  return (
    <>
      <div className={`tech-box--wrapper ${isContactOpen && "contact-modal--open"}`}>
        <div className="tech-box__title">My Tech Stack</div>
        <div className="tech-box">
          <div className="techs">
            <Slider {...settings}>
              {tech &&
                tech.map((bubble, index) => (
                  <div className="tech__slider" key={index}>
                    <Tech badge={bubble.badge} title={bubble.title} />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <div className="tech-box-test"></div>
        <button className="tech-box__expand--btn">
          Remove Carousel/Show All
        </button>
      </div>
    </>
  );
};

export default TechBox;
