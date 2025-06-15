import twoPeople from "@/assets/img/twopeople.jpg";
import clsx from "clsx";
import styles from "@/css/infoloves/HomePage.module.css";
import { useState } from "react";
import Slider from "react-slick";
import img20022025 from "@/assets/img/20022025.png";
import img22022025 from "@/assets/img/22022025.png";
import img28022025 from "@/assets/img/28022025.png";
import imgphototb from "@/assets/img/photoboth.jpg";
import RevealOnScroll from "@/components/portfolio/sections/RevealOnScroll";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
  const [tabChose, setTabChose] = useState("");
  const sliders = useSelector((state) => state.infoLove.sliders);

  const handleChoseTab = (tab: string) => {
    switch (tab) {
      case "boy":
        setTabChose(tab);
        return;
      case "girl":
        setTabChose(tab);
        return;

      default:
        return;
    }
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // nhỏ hơn 1024px (tablet)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // nhỏ hơn 640px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={clsx(styles.heroSection)}>
        <div className={clsx(styles.heroContent)}>
          <div className={clsx(styles.heroDetail)}>
            <h2 className={clsx(styles.heroTitle)}>Happy Ending</h2>
            <h3 className={clsx(styles.heroSubTitle)}>
              Câu chuyện của chúng mình được bắt đầu từ 20/01/2025 nhớ.
            </h3>
            <p
              className={clsx(
                styles.heroDesc,
                !showMore && styles.heroDescLine,
              )}
            >
              Trong thế giới hối hả và bộn bề, có một câu chuyện tình yêu vẫn
              vẹn nguyên như ngày đầu, lặng lẽ sưởi ấm những trái tim xung
              quanh. Đó là câu chuyện của Lan và Hùng. Họ gặp nhau vào một chiều
              mưa giông, dưới mái hiên cũ kỹ của một tiệm sách nhỏ. Anh đưa vội
              chiếc ô, em lúng túng làm rơi cuốn thơ. Từ khoảnh khắc đó, ánh mắt
              chạm nhau, và một tình yêu cứ thế nảy nở, nhẹ nhàng như hơi thở
              mùa xuân. Tình yêu của họ không ồn ào, không khoa trương, mà là sự
              thấu hiểu sâu sắc từ những điều nhỏ nhặt nhất. Lan yêu cái cách
              Hùng tỉ mỉ sửa lại từng trang sách cũ, yêu những nụ cười hiền lành
              và ánh mắt ấm áp của anh. Hùng lại say đắm nụ cười trong veo của
              Lan, yêu cái cách cô lặng lẽ gieo mầm hy vọng vào từng bông hoa,
              từng chậu cây nhỏ. Họ cùng nhau trải qua biết bao mùa mưa nắng, từ
              những ngày tháng khó khăn chật vật đến những khoảnh khắc bình yên
              của cuộc sống. Mỗi sớm mai, Hùng đều chuẩn bị một tách cà phê ấm
              nóng cho Lan, còn Lan lại khéo léo đan cho Hùng những chiếc khăn
              len đủ màu sắc. Thời gian trôi đi, những vết hằn của năm tháng bắt
              đầu in dấu trên khóe mắt và mái tóc. Nhưng tình yêu của họ thì
              không hề phai nhạt, ngược lại, nó càng thêm sâu đậm và bền chặt.
              Hùng vẫn nắm chặt tay Lan mỗi khi đi dạo trên con đường quen
              thuộc, vẫn thì thầm những lời yêu thương như thuở ban đầu. Lan vẫn
              tựa vào vai Hùng, cảm nhận sự bình yên và chở che trong vòng tay
              anh. Tình yêu của họ là minh chứng cho một điều giản dị: tình yêu
              đích thực không phải là tìm thấy một người hoàn hảo, mà là yêu
              thương một người không hoàn hảo một cách hoàn hảo. Câu chuyện của
              Lan và Hùng, một câu chuyện tình yêu đẹp đẽ, khiến ta tin rằng
              giữa cuộc đời này, vẫn còn những điều diệu kỳ mang tên "tình yêu
              vĩnh cửu".
            </p>
            <div className="text-right">
              <button
                className="cursor-pointer rounded bg-blue-200 p-2 font-bold"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Thu gọn" : "Xem thêm"}
              </button>
            </div>
          </div>
          <div className={clsx(styles.heroImgWrap)}>
            <img
              src={twoPeople}
              alt="2 người"
              className={clsx(styles.heroImg)}
            />
          </div>
        </div>
      </section>
      {/*  */}
      <RevealOnScroll>
        <section className={clsx(styles.heroSection)}>
          <div>
            <div>
              <h2 className={clsx(styles.heroTitle)}>Lộ trình ha: </h2>
            </div>
            <div className="mt-4">
              <Slider {...settings}>
                {sliders.map((item, key) => (
                  <div key={key}>
                    <div className="group relative mx-auto h-[500px] w-xs overflow-hidden rounded-lg">
                      <img
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={item.img}
                        alt="img"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-4 text-center leading-6 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                        <h4 className="text-md bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text font-mono font-bold text-transparent">
                          {item.title}
                        </h4>
                        <p className="text-md bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text font-mono font-bold text-transparent">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </RevealOnScroll>
      {/*  */}
      <RevealOnScroll>
        <section className={clsx(styles.heroSection)}>
          <div className="">
            <div>
              <h2 className={clsx(styles.heroTitle)}>
                Đây là thông tin về chúng mình nè:{" "}
              </h2>
            </div>
            <div className={clsx(styles.containerTab)}>
              <div className={clsx(styles.tabs)}>
                <button
                  className={clsx(styles.tabButton, "border-t-0", {
                    [styles.tabActive]: tabChose === "boy",
                  })}
                  onClick={() => handleChoseTab("boy")}
                >
                  Boy friend
                </button>
                <button
                  className={clsx(styles.tabButton, {
                    [styles.tabActive]: tabChose === "girl",
                  })}
                  onClick={() => handleChoseTab("girl")}
                >
                  Girl friend
                </button>
              </div>
              <div
                className={clsx(styles.tabContent, "h-[400px]", {
                  "bg-white": tabChose,
                })}
              >
                <div
                  className={clsx(styles.subTabContentIntro, {
                    [styles.subTabContentIntroHidden]: tabChose,
                  })}
                >
                  <div>
                    <h2>Hello</h2>
                    <p>Chọn bên trái để biết thêm thông tin nhé ^^</p>
                  </div>
                  <div className={clsx(styles.subTabContentIntroImg)}>
                    <img src={imgphototb} alt="imgphototb" />
                  </div>
                </div>
                <div
                  className={clsx(styles.subTabContent, {
                    [styles.subTabContentActive]: tabChose === "boy",
                  })}
                >
                  <h2>Boy friend</h2>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Lê Mạnh Hùng</strong>
                    </li>
                    <li>14/12/2000 - Nhân Mã</li>
                  </ul>
                </div>
                <div
                  className={clsx(styles.subTabContent, {
                    [styles.subTabContentActive]: tabChose === "girl",
                  })}
                >
                  <h2>Girl friend</h2>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Bùi Thị Ngọc Lan</strong>
                    </li>
                    <li>30/9/2004 - Thiên bình</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
};

export default HomePage;
