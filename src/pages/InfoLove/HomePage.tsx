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
              Chuyện Tình Facebook Dating Ngày 20 tháng 01 năm 2025, Hùng và Lan
              đã tìm thấy nhau theo một cách thật đặc biệt: qua Facebook Dating.
              Hùng, với trái tim ấm áp và sự tinh tế vốn có, đã ấp ủ một tình
              cảm đặc biệt dành cho Lan ngay từ những dòng tin nhắn đầu tiên.
              Anh bị thu hút bởi nụ cười rạng rỡ, tâm hồn yêu cái đẹp và sự lãng
              mạn toát lên từ Lan – một cô gái chưa một lần nếm trải hương vị
              tình yêu đầu. Lời chào ngây ngô của Hùng, "Chào em, anh thấy em
              quen quen!", đã mở ra cánh cửa cho một câu chuyện tình yêu diệu
              kỳ. Tết Nguyên Đán và Tình Yêu Chớm Nở Tết Nguyên Đán 2025 đến,
              mang theo không khí ấm áp và sum vầy. Trong khi mọi người bận rộn
              với những buổi tiệc tùng, Hùng và Lan lại chọn cách đồng hành cùng
              nhau qua những tin nhắn và cuộc gọi điện thoại mỗi ngày. Hùng say
              sưa lắng nghe Lan kể về những loài hoa rực rỡ trong vườn nhà, về
              những món ăn được chuẩn bị trong những ngày tết. Lan lại bị cuốn
              hút bởi giọng nói trầm ấm, những câu chuyện thú vị và sự quan tâm
              tinh tế của Hùng. Tình yêu của họ cứ thế được nuôi dưỡng, lớn dần
              qua từng cuộc trò chuyện, qua mỗi câu hỏi thăm và qua cả những lời
              chúc ngủ ngon. Tất nhiên, cũng có những lúc họ bất đồng quan điểm,
              những cuộc tranh luận nhỏ tưởng chừng như sẽ chia cắt hai trái tim
              đang dần xích lại gần. Nhưng rồi, bằng một sự kết nối vô hình và
              kỳ diệu, như thể định mệnh đã an bài, Lan và Hùng lại tìm thấy
              tiếng nói chung, vượt qua mọi trở ngại để hiểu nhau hơn. Mỗi lần
              vượt qua thử thách, tình cảm của họ lại càng thêm sâu sắc, bền
              chặt. Cuộc Gặp Gỡ Định Mệnh Ngày 20 tháng 02 năm 2025, tròn một
              tháng kể từ ngày những dòng tin nhắn đầu tiên được gửi đi, Hùng và
              Lan chính thức gặp mặt sau một tháng trò chuyện miệt mài qua màn
              hình điện thoại, không khí không chỉ có sự mong chờ mà còn đong
              đầy một chút ngượng nghịu đáng yêu. Lan hồi hộp trong bộ trang
              phục trắng mình yêu thích, còn Hùng chuẩn bị sẵn một món quà là
              chú gấu nhỏ nhắn, mang biểu cảm mà Lan từng nói là mình muốn “tác
              động” nhất. Khoảnh khắc ánh mắt họ chạm nhau, mọi khoảng cách
              dường như tan biến. Họ trò chuyện thoải mái, tự nhiên như đã thân
              quen từ rất lâu, không chút xa lạ. Lan cảm nhận được sự ấm áp từ
              Hùng, và Hùng thì đắm chìm trong vẻ đẹp tươi sáng, rạng rỡ của
              Lan. Sau buổi gặp mặt đầu tiên ấy, nhận thấy sự hợp nhau về “tần
              số”, những buổi hẹn hò cứ thế nối tiếp nhau, lần thứ hai, lần thứ
              ba… Mỗi lần gặp gỡ là một lần họ khám phá thêm những điều thú vị
              về đối phương, về những sở thích chung, những ước mơ thầm kín.
              Tình yêu không còn chỉ là những dòng tin nhắn hay cuộc gọi, mà đã
              hiện hữu, chân thực và sống động. Lời Tỏ Tình Chân Thành Ngày 07
              tháng 03 năm 2025, trong một buổi chiều lãng mạn dưới ánh đèn lung
              linh ngoài ban công của một quán cà phê hướng ra sông Tô Lịch.
              Hùng đã quyết định bày tỏ lòng mình. Anh không dám nhìn sâu vào
              đôi mắt Lan, nhưng nắm chặt tay cô và nói bằng tất cả sự chân
              thành từ trái tim: "Em có đồng ý chọn anh làm người yêu em
              không?”. Lời tỏ tình giản dị nhưng chứa chan tình cảm của Hùng đã
              chạm đến trái tim Lan. Anh giải thích rằng: “Anh muốn em là người
              được chủ động chọn anh, chứ không phải là em có đồng ý làm người
              yêu anh”. Cô xúc động, và trong khoảnh khắc ấy, tình yêu đầu tiên
              của cô đã đến, một tình yêu ấm áp, tinh tế và lãng mạn đúng như cô
              hằng mơ ước. Lan khẽ gật đầu, nụ cười rạng rỡ trên môi, và cũng
              chính từ khoảnh khắc đó, một câu chuyện tình yêu đẹp như mơ của
              Hùng và Lan chính thức bắt đầu.
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
