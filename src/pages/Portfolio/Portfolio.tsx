import LoadingScreen from "@/components/portfolio/LoadingScreen";
import Navbar from "@/components/portfolio/Navbar";
import Home from "@/components/portfolio/sections/Home";
import { useEffect, useState } from "react";
import styles from "@/css/portfolios/Portfolio.module.css";
import clsx from "clsx";
import About from "@/components/portfolio/sections/About";
import Project from "@/components/portfolio/sections/Project";
import Contact from "@/components/portfolio/sections/Contact";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <div className={clsx(styles.portfolio)}>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        {isLoaded && (
          <div
            className={clsx(
              "min-h-screen",
              "bg-black",
              // isLoaded ? "opacity-100" : "opacity-0",
              // "text-gray-100",
              // "transition-opacity",
              // "duration-700"
            )}
          >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* section */}
            <Home />
            <About />
            <Project />
            <Contact />

            <footer className="w-full border-t border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg">
              <div className="m-auto max-w-5xl px-4">
                <div className="flex h-16 items-center justify-between">
                  <i>Backend Developer</i>
                  <i>0986624798 - manhhung141220@gmail.com</i>
                </div>
              </div>
            </footer>
          </div>
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
};
export default Portfolio;
