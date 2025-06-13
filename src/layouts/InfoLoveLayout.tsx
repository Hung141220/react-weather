import { Outlet } from "react-router-dom";
import HeaderComponent from "@/components/infolove/header/HeaderComponent";
import ScrollToTopButton from "@/components/ScrollToTopButton";

function InfoLoveLayout() {
  return (
    <>
      {/* header */}
      <HeaderComponent />

      <main style={{ background: "#ccc" }}>
        <Outlet />
      </main>

      <ScrollToTopButton />
      {/* footer */}
    </>
  );
}

export default InfoLoveLayout;
