import Header from '@/components/darling/Header';
import '@/css/darlings/GlobalStyle.css';
import background from '@/assets/darling/background.jpg';
import picutreflower from '@/assets/darling/picutreflower.jpg';
import { selectAnchorLinks } from '@/redux/slices/darlingSlice';
import { useSelector } from 'react-redux';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const DarlingLayout = () => {
  const anchorLinks = useSelector(selectAnchorLinks);
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
                <p className="font-family-linotypezapfino inline-block rotate-[350deg] text-9xl py-2 leading-30 text-[#9b3139] italic">
                  đều được <br />
                  Định Mệnh sắp đặt…
                </p>
                <p className="text-2xl tracking-wide">
                  vậy họ đã bắt đầu như thế nào?
                </p>

                <span className="block text-3xl leading-none">…</span>
              </section>
            </RevealOnScroll>

            <RevealOnScroll>
              <section className="py-8">
                <div className="space-y-18">
                  {anchorLinks.map((item, key) => (
                    <p
                      key={key}
                      className="relative text-center text-4xl text-[#9b3139] before:absolute before:-bottom-4 before:left-1/2 before:h-1 before:w-[250px] before:-translate-x-1/2 before:bg-[#9b3139] before:contain-content"
                    >
                      {item}
                    </p>
                  ))}
                  <div className="grid grid-flow-col justify-end gap-4 pr-60">
                    <button className="cursor-pointer rounded-full border border-[#9b3139] px-6 py-2 text-[#9b3139] transition-all duration-300 ease-in hover:-translate-y-1 hover:bg-[#9b3131] hover:text-white">
                      Tìm hiểu
                    </button>
                    <button className="cursor-pointer rounded-full border border-[#9b3139] bg-[#9b3139] px-6 py-2 text-white transition-all duration-300 ease-in hover:-translate-y-1 hover:text-white">
                      Yêu đương
                    </button>
                  </div>
                </div>
              </section>
            </RevealOnScroll>
          </main>

          {/* Footer */}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default DarlingLayout;
