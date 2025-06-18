const Header = () => {
  return (
    <>
      <header className={`fixed z-10 w-full bg-[#513c18] py-8`}>
        <nav className={`flex items-center justify-between px-2`}>
          <a href="#" className={``}>
            <h2
              className={`text-shadow-[0_0_4_rgba(255,255,255,0.8) bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text text-2xl font-medium text-transparent`}
            >
              Darling 🌷
            </h2>
          </a>

          <div
            className={`grid grid-cols-[auto_50px_auto] place-items-center text-lg`}
          >
            <a
              href="#"
              className={`text-shadow-[0_0_4_rgba(255,255,255,0.8) bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text font-medium text-transparent`}
            >
              Mạnh Hùng
            </a>
            <a href="#" className={``}>
              <span
                className={`text-shadow-[0_0_4_rgba(255,255,255,0.8) animate-heartbeat inline-block bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text font-medium text-transparent`}
              >
                ❤️
              </span>
            </a>
            <a
              href="#"
              className={`text-shadow-[0_0_4_rgba(255,255,255,0.8) bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text font-medium text-transparent`}
            >
              Ngọc Lan
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
