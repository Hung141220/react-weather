import twoPeople from "@/assets/img/twopeople.jpg";
import clsx from "clsx";
import styles from "@/css/infoloves/HomePage.module.css";
import { useState } from "react";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
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
                !showMore && styles.heroDescLine
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
                className="cursor-pointer bg-blue-200 p-2 rounded font-bold"
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

      {/* <section>
        <div>
          <div>
            <h2>Lộ trình ha: </h2>
          </div>
          <div>

          </div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
