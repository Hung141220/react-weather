import Header from '@/components/darling/Header';
import '@/css/darlings/GlobalStyle.css';
const DarlingLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      <main className="pt-28">
        <h4 className="text-center text-5xl uppercase underline decoration-[#9b3039] decoration-2 underline-offset-10">
          câu chuyện tình yêu
        </h4>
      </main>

      {/* Footer */}
    </>
  );
};

export default DarlingLayout;
