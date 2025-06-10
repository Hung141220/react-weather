import { Link } from "react-router-dom";

const MobileMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev?: any) => void;
}) => {
  return (
    <div
      className={`
        z-40 flex flex-col
        w-full
        bg-[rgba(10,10,10,0.8)]
        transition-all
        fixed top-0 left-0 items-center justify-center duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        className="
          text-white text-3xl
          cursor-pointer
          absolute top-4 right-6 focus:outline-none
        "
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="
          my-4
          text-2xl font-semibold text-white
          transition-transform opacity-100
          transform duration-300 translate-y-5
        "
      >
        {" "}
        Home{" "}
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="
          my-4
          text-2xl font-semibold text-white
          transition-transform opacity-100
          transform duration-300 translate-y-5
        "
      >
        {" "}
        About{" "}
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="
          my-4
          text-2xl font-semibold text-white
          transition-transform opacity-100
          transform duration-300 translate-y-5
        "
      >
        {" "}
        Projects{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="
          my-4
          text-2xl font-semibold text-white
          transition-transform opacity-100
          transform duration-300 translate-y-5
        "
      >
        {" "}
        Contat{" "}
      </a>
      <Link
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
      </Link>
    </div>
  );
};

export default MobileMenu;
