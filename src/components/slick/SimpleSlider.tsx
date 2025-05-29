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
    <div
      className="flex flex-col justify-center w-screen h-screen"
      style={{ marginTop: "20px" }}
    >
      <Slider {...settings}>
        <div className="sm:w-60 w-[300px] h-[300px] shadow-lg ">
          <img
            src={darling}
            alt="Darling"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="sm:w-60 w-[300px] h-[300px] shadow-lg">
          <img
            src={pictureCao}
            alt="Darling"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="sm:w-60 w-[300px] h-[300px] shadow-lg">
          <img
            src={kiss}
            alt="Darling"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
