import twoPeople from "@/assets/img/twopeople.jpg";
import clsx from "clsx";
import styles from "@/css/infoloves/HomePage.module.css";
import { useState } from "react";
import Slider from "react-slick";
import imgphototb from "@/assets/img/photoboth.jpg";
import RevealOnScroll from "@/components/portfolio/sections/RevealOnScroll";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
  const [tabChose, setTabChose] = useState("");
  const { sliders, content } = useSelector(
    (state: RootState) => state.infoLove,
  );

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
              {content}
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
