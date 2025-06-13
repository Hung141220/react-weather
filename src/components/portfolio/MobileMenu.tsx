const MobileMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 
        z-40 flex w-full flex-col items-center justify-center bg-[rgba(10,10,10,0.8)] transition-all duration-300 ease-in-out ${
        menuOpen
          ? "pointer-events-auto h-screen opacity-100"
          : "pointer-events-none h-0 opacity-0"
      } `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        className="absolute top-4 right-6 cursor-pointer text-3xl text-white focus:outline-none"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="my-4 translate-y-5 transform text-2xl font-semibold text-white opacity-100 transition-transform duration-300"
      >
        {" "}
        Home{" "}
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="my-4 translate-y-5 transform text-2xl font-semibold text-white opacity-100 transition-transform duration-300"
      >
        {" "}
        About{" "}
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="my-4 translate-y-5 transform text-2xl font-semibold text-white opacity-100 transition-transform duration-300"
      >
        {" "}
        Projects{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="my-4 translate-y-5 transform text-2xl font-semibold text-white opacity-100 transition-transform duration-300"
      >
        {" "}
        Contat{" "}
      </a>
      {/* <Link
        to="/funny"
        onClick={() => setMenuOpen(false)}
        className="
          my-4
          text-2xl font-semibold text-white
          transition-transform opacity-100
          transform duration-300 translate-y-5
        "
      >
        {" "}
        Darling{" "}
      </Link> */}
    </div>
  );
};

export default MobileMenu;
