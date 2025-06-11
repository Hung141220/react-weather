import { Outlet } from "react-router-dom";
import styles from "@/css/infoloves/InfoLoveLayout.module.css";
import HeaderComponent from "@/components/infolove/header/HeaderComponent";
import clsx from "clsx";

function InfoLoveLayout() {
  return (
    <>
      {/* header */}
      <HeaderComponent />

      <main>
        <Outlet />
      </main>

      {/* footer */}
    </>
  );
}

export default InfoLoveLayout;
