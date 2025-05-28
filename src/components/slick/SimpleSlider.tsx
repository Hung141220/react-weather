import React from "react";
import Slider from "react-slick";
import darling from "../../assets/481874777_657833050073465_9007047459517628461_n.jpg";
import pictureCao from "../../assets/picutreCao.jpg";
import kiss from "../../assets/kiss.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container" style={{ marginTop: "20px" }}>
      <Slider {...settings}>
        <div>
          <img
            src={darling}
            alt="Darling"
            style={{
              width: "100%",
              objectFit: "cover",
              padding: "20px",
              height: "300px",
            }}
          />
        </div>
        <div>
          <img
            src={pictureCao}
            alt="Darling"
            style={{
              width: "100%",
              objectFit: "cover",
              padding: "20px",
              height: "300px",
            }}
          />
        </div>
        <div>
          <img
            src={kiss}
            alt="Darling"
            style={{
              width: "100%",
              objectFit: "cover",
              padding: "20px",
              height: "300px",
            }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
