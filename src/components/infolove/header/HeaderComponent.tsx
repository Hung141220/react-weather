import styles from "./HeaderComponent.module.css";
import clsx from "clsx";

const HeaderComponent = () => {
  return (
    <>
      <header className={clsx(styles.header)}>
        <nav className={clsx(styles.navbar)}>
          <a href="#" className={clsx(styles.navbarLink)}>
            <h2 className={clsx(styles.logoText)}>Darling 😁</h2>
          </a>

          <div className={clsx(styles.navMenu)}>
            <a href="#" className={clsx(styles.navLink)}>
              Mạnh Hùng
            </a>
            <a href="#" className={clsx(styles.navLink)}>
              <span className={clsx(styles.navLingHeart)}>❤️</span>
            </a>
            <a href="#" className={clsx(styles.navLink)}>
              Ngọc Lan
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
