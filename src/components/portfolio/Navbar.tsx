import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-4 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg">
      <div className="m-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Backend <span className="text-blue-500">Developer</span>{" "}
          </a>
          {/* Hamburger menu icon (visible on mobile only) */}
          <div
            onClick={() => setMenuOpen((prev: boolean) => !prev)}
            className="z-4 cursor-pointer md:hidden"
          >
            &#9776;
          </div>

          {/* Desktop menu */}
          <div className={clsx("hidden items-center space-x-8 md:flex")}>
            {["home", "about", "projects", "contact"].map((aLink, key) => (
              <a
                key={key}
                href={`#${aLink}`}
                className="text-gray-300 capitalize transition-colors hover:text-white"
              >
                {aLink}
              </a>
            ))}
            <Link
              to={"info-love"}
              className="text-gray-300 capitalize transition-colors hover:text-white"
            >
              Info Love
            </Link>
          </div>

          {/* Mobile menu dropdown */}
          <div
            className={`fixed top-0 left-0 z-4 flex w-full flex-col items-center justify-center bg-[rgba(10,10,10,0.9)] backdrop-blur-2xl transition-all duration-100 ease-in-out ${
              menuOpen
                ? "pointer-events-auto h-screen translate-y-0 opacity-100"
                : "pointer-events-none h-0 -translate-y-full opacity-0"
            } `}
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-6 cursor-pointer text-3xl text-white focus:outline-none"
            >
              &times;
            </button>
            {["home", "about", "projects", "contact"].map((aLink, key) => (
              <a
                key={key}
                to={`#${aLink}`}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "my-4 text-2xl font-semibold capitalize transition-colors duration-200",
                  currentHash === `#${aLink}`
                    ? "text-white underline decoration-blue-500 underline-offset-4"
                    : "text-gray-400",
                )}
              >
                {aLink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
