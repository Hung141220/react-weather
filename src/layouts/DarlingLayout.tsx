import Header from '@/components/darling/Header';
import '@/css/darlings/GlobalStyle.css';
import background from '@/assets/darling/background.jpg';
import picutreflower from '@/assets/darling/picutreflower.jpg';
import { selectAnchorLinks } from '@/redux/slices/darlingSlice';
import { useSelector } from 'react-redux';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import RevealOnScroll from '@/components/shared/RevealOnScroll';
import Slider from 'react-slick';
import type { RootState } from '@/redux/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DarlingLayout = () => {
  const anchorLinks = useSelector(selectAnchorLinks);
  const { sliders } = useSelector((state: RootState) => state.infoLove);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    dots: false,
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
      <div
        className="min-h-screen bg-contain"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="">
          {/* Header */}
          <Header />
          <main className="px-20 pt-28">
            <RevealOnScroll>
              <section className="py-8">
                <h4 className="mb-8 text-center text-5xl uppercase underline decoration-[#9b3039] decoration-2 underline-offset-10">
                  câu chuyện tình yêu
                </h4>
                <div className="mx-auto w-md border border-neutral-300 bg-[#fdfcf7] p-4 pt-3 pb-10 shadow-lg">
                  <img
                    src={picutreflower}
                    alt="picutreflower"
                    className="w-full object-cover"
                  />
                </div>
              </section>
            </RevealOnScroll>

            <RevealOnScroll>
              <section className="space-y-2.5 py-8 text-center">
                <p className="text-3xl tracking-wide">Mỗi người gặp nhau</p>
                <p className="font-family-linotypezapfino inline-block rotate-[350deg] py-2 text-9xl leading-30 text-[#9b3139] italic">
                  đều được <br />
                  Định Mệnh sắp đặt…
                </p>
                <div className="mt-12 rounded-lg bg-gradient-to-r from-red-100 to-orange-100 p-6 text-center">
                  <p className="mb-4 text-2xl tracking-wide">
                    vậy họ đã bắt đầu như thế nào?
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-[#9b3139]"></div>
                    <div className="h-3 w-3 animate-pulse rounded-full bg-orange-400 delay-100"></div>
                    <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-700 delay-200"></div>
                  </div>
                </div>
              </section>
            </RevealOnScroll>

            <RevealOnScroll>
              <section className="py-8">
                <div className="space-y-18">
                  {anchorLinks.map((item, key) => (
                    <a
                      href={`#anchor${key}`}
                      key={key}
                      className="relative block text-center text-4xl text-[#9b3139] transition-all duration-200 ease-in-out before:absolute before:-bottom-4 before:left-1/2 before:h-1 before:w-[250px] before:-translate-x-1/2 before:bg-[#9b3139] before:contain-content hover:animate-bounce"
                    >
                      {item}
                    </a>
                  ))}
                  <div className="grid grid-flow-col justify-end gap-4 pr-60">
                    <button className="cursor-pointer rounded-full border border-[#9b3139] px-6 py-2 text-[#9b3139] transition-all duration-300 ease-in hover:-translate-y-1 hover:bg-[#9b3131] hover:text-white">
                      Tìm hiểu
                    </button>
                    <button className="cursor-pointer rounded-full border border-[#9b3139] bg-[#9b3139] px-6 py-2 text-white transition-all delay-200 duration-300 ease-in not-hover:animate-bounce hover:-translate-y-1 hover:text-white">
                      Yêu đương
                    </button>
                  </div>
                </div>
              </section>
            </RevealOnScroll>

            <RevealOnScroll>
              <section className="py-8">
                <h1
                  id="anchor0"
                  className="mb-6 scroll-mt-28 text-4xl font-bold text-[#9b3139] md:text-5xl"
                >
                  Chuyện Tình Facebook Dating
                </h1>
                <div className="rounded-lg border-l-4 border-[#9b3139] bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Ngày 20 tháng 01 năm 2025, Hùng và Lan đã tìm thấy nhau theo
                    một cách thật đặc biệt: qua Facebook Dating. Hùng, với trái
                    tim ấm áp và sự tinh tế vốn có, đã ấp ủ một tình cảm đặc
                    biệt dành cho Lan ngay từ những dòng tin nhắn đầu tiên. Anh
                    bị thu hút bởi nụ cười rạng rỡ, tâm hồn yêu cái đẹp và sự
                    lãng mạn toát lên từ Lan – một cô gái chưa một lần nếm trải
                    hương vị tình yêu đầu. Lời chào ngây ngô của Hùng, "Chào em,
                    anh thấy em quen quen!", đã mở ra cánh cửa cho một câu
                    chuyện tình yêu diệu kỳ.
                  </p>
                </div>
              </section>
            </RevealOnScroll>
            <RevealOnScroll>
              <section className="py-8">
                <h1
                  id="anchor1"
                  className="mb-6 scroll-mt-28 text-4xl font-bold text-[#9b3139] md:text-5xl"
                >
                  Tết Nguyên Đán và Tình Yêu Chớm Nở
                </h1>
                <div className="rounded-lg border-l-4 border-[#9b3139] bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Tết Nguyên Đán 2025 đến, mang theo không khí ấm áp và sum
                    vầy. Trong khi mọi người bận rộn với những buổi tiệc tùng,
                    Hùng và Lan lại chọn cách đồng hành cùng nhau qua những tin
                    nhắn và cuộc gọi điện thoại mỗi ngày. Hùng say sưa lắng nghe
                    Lan kể về những loài hoa rực rỡ trong vườn nhà, về những món
                    ăn được chuẩn bị trong những ngày tết. Lan lại bị cuốn hút
                    bởi giọng nói trầm ấm, những câu chuyện thú vị và sự quan
                    tâm tinh tế của Hùng. Tình yêu của họ cứ thế được nuôi
                    dưỡng, lớn dần qua từng cuộc trò chuyện, qua mỗi câu hỏi
                    thăm và qua cả những lời chúc ngủ ngon.
                  </p>
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Tất nhiên, cũng có những lúc họ bất đồng quan điểm, những
                    cuộc tranh luận nhỏ tưởng chừng như sẽ chia cắt hai trái tim
                    đang dần xích lại gần. Nhưng rồi, bằng một sự kết nối vô
                    hình và kỳ diệu, như thể định mệnh đã an bài, Lan và Hùng
                    lại tìm thấy tiếng nói chung, vượt qua mọi trở ngại để hiểu
                    nhau hơn. Mỗi lần vượt qua thử thách, tình cảm của họ lại
                    càng thêm sâu sắc, bền chặt.
                  </p>
                </div>
              </section>
            </RevealOnScroll>
            <RevealOnScroll>
              <section className="py-8">
                <h1
                  id="anchor2"
                  className="mb-6 scroll-mt-28 text-4xl font-bold text-[#9b3139] md:text-5xl"
                >
                  Cuộc Gặp Gỡ Định Mệnh
                </h1>
                <div className="rounded-lg border-l-4 border-[#9b3139] bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Ngày 20 tháng 02 năm 2025, tròn một tháng kể từ ngày những
                    dòng tin nhắn đầu tiên được gửi đi, Hùng và Lan chính thức
                    gặp mặt sau một tháng trò chuyện miệt mài qua màn hình điện
                    thoại, không khí không chỉ có sự mong chờ mà còn đong đầy
                    một chút ngượng nghịu đáng yêu. Lan hồi hộp trong bộ trang
                    phục trắng mình yêu thích, còn Hùng chuẩn bị sẵn một món quà
                    là chú gấu nhỏ nhắn, mang biểu cảm mà Lan từng nói là mình
                    muốn “tác động” nhất. Khoảnh khắc ánh mắt họ chạm nhau, mọi
                    khoảng cách dường như tan biến. Họ trò chuyện thoải mái, tự
                    nhiên như đã thân quen từ rất lâu, không chút xa lạ. Lan cảm
                    nhận được sự ấm áp từ Hùng, và Hùng thì đắm chìm trong vẻ
                    đẹp tươi sáng, rạng rỡ của Lan.
                  </p>
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Sau buổi gặp mặt đầu tiên ấy, nhận thấy sự hợp nhau về “tần
                    số”, những buổi hẹn hò cứ thế nối tiếp nhau, lần thứ hai,
                    lần thứ ba... Mỗi lần gặp gỡ là một lần họ khám phá thêm
                    những điều thú vị về đối phương, về những sở thích chung,
                    những ước mơ thầm kín. Tình yêu không còn chỉ là những dòng
                    tin nhắn hay cuộc gọi, mà đã hiện hữu, chân thực và sống
                    động.
                  </p>
                </div>
              </section>
            </RevealOnScroll>
            <RevealOnScroll>
              <section className="py-8">
                <h1
                  id="anchor3"
                  className="mb-6 scroll-mt-28 text-4xl font-bold text-[#9b3139] md:text-5xl"
                >
                  Lời Tỏ Tình Chân Thành
                </h1>
                <div className="rounded-lg border-l-4 border-[#9b3139] bg-white/70 p-6 shadow-lg backdrop-blur-sm">
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Ngày 07 tháng 03 năm 2025, trong một buổi chiều lãng mạn
                    dưới ánh đèn lung linh ngoài ban công của một quán cà phê
                    hướng ra sông Tô Lịch. Hùng đã quyết định bày tỏ lòng mình.
                    Anh không dám nhìn sâu vào đôi mắt Lan, nhưng nắm chặt tay
                    cô và nói bằng tất cả sự chân thành từ trái tim: "Em có đồng
                    ý chọn anh làm người yêu em không?”.
                  </p>
                  <p className="indent-8 text-lg leading-relaxed font-medium text-gray-800">
                    Lời tỏ tình giản dị nhưng chứa chan tình cảm của Hùng đã
                    chạm đến trái tim Lan. Anh giải thích rằng: “Anh muốn em là
                    người được chủ động chọn anh, chứ không phải là em có đồng ý
                    làm người yêu anh”. Cô xúc động, và trong khoảnh khắc ấy,
                    tình yêu đầu tiên của cô đã đến, một tình yêu ấm áp, tinh tế
                    và lãng mạn đúng như cô hằng mơ ước. Lan khẽ gật đầu, nụ
                    cười rạng rỡ trên môi, và cũng chính từ khoảnh khắc đó, một
                    câu chuyện tình yêu đẹp như mơ của Hùng và Lan chính thức
                    bắt đầu.
                  </p>
                </div>
              </section>
            </RevealOnScroll>
            <RevealOnScroll>
              <section className="py-8">
                <div className="">
                  <Slider {...settings}>
                    {sliders.map((item, key) => (
                      <div key={key}>
                        <div className="group relative mx-auto h-[300px] w-xs rounded-lg">
                          <img
                            className="h-full w-full object-cover transition-transform duration-300"
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
              </section>
            </RevealOnScroll>
          </main>

          {/* Footer */}
          <footer className="mt-12 bg-[#fdfcf7] py-8 pb-12 text-center">
            <div className="relative mx-auto max-w-4xl px-4">
              <p className="text-xl font-semibold text-[#9b3139]">
                Cảm ơn các bạn đã đọc nhem
                <span className="ml-2 animate-pulse">^^</span>
              </p>
              <div className="mt-4 flex justify-center gap-3 text-sm text-[#9b3139] opacity-80">
                <span>© {new Date().getFullYear()} Hùng & Lan</span>
                <span>·</span>
                <span>Yêu nhau đến già nhaaaa</span>
              </div>

              {/* Line decorative heart */}
              <div className="absolute top-full left-1/2 mt-4 h-6 w-6 -translate-x-1/2 animate-bounce text-[#9b3139]">
                ❤️
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* <ScrollToTopButton /> */}
    </>
  );
};

export default DarlingLayout;
