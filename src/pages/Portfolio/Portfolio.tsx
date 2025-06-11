import LoadingScreen from "@/components/portfolio/LoadingScreen";
import MobileMenu from "@/components/portfolio/MobileMenu";
import Navbar from "@/components/portfolio/Navbar";
import Home from "@/components/portfolio/sections/Home";
import { useEffect, useState } from "react";
import styles from "@/css/portfolios/Portfolio.module.css";
import clsx from "clsx";

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
        <div
          className={clsx(
            isLoaded ? "opacity-100" : "opacity-0",
            "min-h-screen",
            "text-gray-100",
            "bg-black",
            "transition-opacity",
            "duration-700"
          )}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          {/* section */}
          <Home />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
