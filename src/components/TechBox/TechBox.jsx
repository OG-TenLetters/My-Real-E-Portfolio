import TechBoxApi from "./TechBoxApi";
import Tech from "./Tech";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TechBox = () => {
  const tech = TechBoxApi();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    rtl: false,
    ltr: true,
  };

  return (
    <>
    <div className="tech-box--wrapper">
        <div className="tech-box__title">My Tech Stack</div>
      <div className="tech-box">
        <div className="techs">
          <Slider {...settings}>
            {tech &&
              tech.map((bubble, index) => (
                <div key={index}>
                  <Tech badge={bubble.badge} title={bubble.title} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
    <button className="tech-box__expand--btn">
      Remove Carousel/Show All
    </button>
              </>
  );
};

export default TechBox;
