import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import "./funny.css";
import { dataImage } from "@/utils/dataImage";
import { message } from "antd";
import { useEffect } from "react";

function FunnyPage() {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    messageApi.success("Hí lu Người Yêu ❤️");
  }, []);
  return (
    <>
      {contextHolder}
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500, // Thời gian chờ giữa các slide (milliseconds)
          disableOnInteraction: false, // Khi người dùng tương tác (kéo/nhấn), có tắt autoplay không? (false = không tắt)
          pauseOnMouseEnter: true, // Tạm dừng autoplay khi chuột di vào slider
        }}
      >
        {dataImage.map((item) => (
          <SwiperSlide>
            <img
              src={item}
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default FunnyPage;
