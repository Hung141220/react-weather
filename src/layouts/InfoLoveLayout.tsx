import { Outlet } from "react-router-dom";
import HeaderComponent from "@/components/infolove/header/HeaderComponent";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import GlobalStyles from "@/components/infolove/GlobalStyles";

function InfoLoveLayout() {
  return (
    <>
      <GlobalStyles>
        {/* header */}
        <HeaderComponent />

        <main style={{ background: "#ccc" }}>
          <Outlet />
        </main>

        <ScrollToTopButton />
        {/* footer */}
      </GlobalStyles>
    </>
  );
}

export default InfoLoveLayout;
