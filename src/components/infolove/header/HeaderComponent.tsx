import React from "react";
import styles from "./HeaderComponent.module.css";
import clsx from "clsx";

function HeaderComponent() {
  return (
    <>
      <header className={clsx(styles.header)}>
        <nav className={clsx(styles.navbar)}>
          <a href="#" className={clsx(styles.navbarLink)}>
            <h2 className={clsx(styles.logoText)}>Darling 😁</h2>
          </a>

          <div className={clsx(styles.navMenu)}>
            <a href="" className={clsx(styles.navLink)}>
              Home
            </a>
            <a href="" className={clsx(styles.navLink)}>
              About
            </a>
            <a href="" className={clsx(styles.navLink)}>
              Contact
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
