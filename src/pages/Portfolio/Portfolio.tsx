import LoadingScreen from "@/components/portfolio/LoadingScreen";
import MobileMenu from "@/components/portfolio/MobileMenu";
import Navbar from "@/components/portfolio/Navbar";
import Home from "@/components/portfolio/sections/Home";
import { useEffect, useState } from "react";
import styles from "@/css/portfolios/Portfolio.module.css";
import clsx from "clsx";
import About from "@/components/portfolio/sections/About";
import Project from "@/components/portfolio/sections/Project";
import Contact from "@/components/portfolio/sections/Contact";

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
          </div>
        )}
      </div>
    </>
  );
};
export default Portfolio;
